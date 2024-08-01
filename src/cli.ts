#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { input, select, search } from "@inquirer/prompts";
import { parseFunctionSignature } from "./utils/parse";
import { createProblemDir } from "./utils/create"
import type { Difficulty } from "./utils/create"
import { doesProblemExist, ABSOLUTE_PATH, findAllProblems } from "./utils/file"
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

const program = new Command();

program
  .name("lcdocs-ts")
  .description("CLI to create, test and document LeetCode solutions")
  .version("0.1.0");


program
.command("create")
.description("Creates a problem to test and document")
.action(async () => {

  const problemName = await input({ message: "Enter the problem name:"});
  if (doesProblemExist(problemName)) {
    console.log(chalk.red(`Problem: '${problemName}' already exists!`));
    console.log("Exiting...");
    process.exit(1);
  }
  const difficulty = await select({ 
    message: "What is the difficulty of the problem?",
    choices: [
      {
        name: "Easy",
        value: "easy",
      },
      {
        name: "Medium",
        value: "medium"
      },
      {
        name: "Hard",
        value: "hard"
      }
    ]
  }) as Difficulty;
  const functionSignature = await input({ message: "Provide the function signature (TypeScript):"});
  const [functionName, argsTypes, returnType ] = parseFunctionSignature(functionSignature);
  createProblemDir(problemName, difficulty, {
    functionSignature,
    functionName,
    argsTypes,
    returnType
  });
  
  console.log(chalk.green(`Created problem: '${problemName}'`));
})

program.
  command("test")
  .description("Run tests")
  .option("-a, --all", "Run all tests")
  .option("-p, --problem <PROBLEM>", "Run tests folder containing the provided path")
  .action(async (options) => {
    if (options.all) {
      const child = spawn("yarn", ["test"], { cwd: ABSOLUTE_PATH, stdio: "inherit" });
    } else if (options.problem) {
      const child = spawn("yarn", ["test", `--testPathPattern=".*${options.problem}.*"`], { cwd: ABSOLUTE_PATH, stdio: "inherit"});
    } else {
      const choices = findAllProblems().map(([diff, name]) => {
        return {
          name,
          value: `.*${name}.*`
        }
      })
      if (!choices.length) {
        console.log(chalk.cyan("No problems to test!"));
        process.exit(0);
      }
      const testPathPattern = await search({
        message: "Choose a problem to test:",
        source(term, opt) {
          if (!term) {
            return choices;
          }
          return choices.filter((choice) => {
            return choice.name.toLowerCase().includes(term.toLowerCase());
          });
        },
      })
      const child = spawn("yarn", ["test", `--testPathPattern="${testPathPattern}"`], { cwd: ABSOLUTE_PATH, stdio: "inherit"});
    }
  })

program.command("run")
  .description("Run a specific problem")
  .action(async () => {
    const choices = findAllProblems().map(([diff, name]) => {
      return {
        name,
        value: `${diff} - ${name}/index.ts`
      }
    });
    if (!choices.length) {
      console.log(chalk.cyan("No problems to run!"));
      process.exit(0);
    }

    const filePath = await search({
      message: "Choose a problem to run:",
      source(term, opt) {
        if (!term) {
          return choices
        }
        return choices.filter(choice => {
          return choice.name.toLowerCase().includes(term.toLowerCase())
        })
      },
    })

    const child = spawn("ts-node", [filePath], { cwd: ABSOLUTE_PATH, stdio: "inherit" });
  })
program.parse(process.argv);