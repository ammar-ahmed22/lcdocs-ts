#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { input, select, number, confirm } from "@inquirer/prompts";
import { parseFunctionSignature } from "./utils/parse";
import { createProblemDir } from "./utils/create"
import type { Difficulty } from "./utils/create"
import fs from "fs";
import path from "path";

const program = new Command();

program
  .name("lcdocs-ts")
  .description("CLI to create, test and document LeetCode solutions")
  .version("0.1.0");


program
.command("create")
.description("Creates a problem to test and document")
.action(async () => {

  const problemName = await input({ message: "Enter the problem name"});
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
  const functionSignature = await input({ message: "Provide the function signature (TypeScript)"});
  const [functionName, argsTypes, returnType ] = parseFunctionSignature(functionSignature);
  createProblemDir(problemName, difficulty, {
    functionSignature,
    functionName,
    argsTypes,
    returnType
  });
  // let isTestCase = await confirm({ message: "Would you like to provide a test case?"});;
  // let testCases: {args: string[], result: string}[] = [];
  // while(isTestCase) {
  //   console.log(`Test Case #${testCases.length + 1}`);
  //   let args = await input({ message: "Provide the arguments as a comma-separated list"});
  //   let result = await input({ message: "Provide the expected result"});
  //   testCases.push({
  //     args: args.split(",").map(a => a.trim()), // THIS DOES NOT WORK BECAUSE ARRAYS WILL HAVE COMMAS!!
  //     result
  //   })
  //   isTestCase = await confirm({ message: "Would you to provide another test case?"});
  // }

  console.log({ problemName, difficulty, functionName, argsTypes, returnType, });
})

program.parse(process.argv);