#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("lcdocs-ts")
  .description("CLI to create, test and document LeetCode solutions")
  .version("0.1.0");

program.command("create")
  .description("Create a problem to be solved with tests and documentation")
  .argument('<NAME>', 'name of the problem')
  .option("-d, --difficulty <DIFF>", "difficulty of the problem")
  .action((problem, options) => {
    console.log(problem, options);
  })

program.parse(process.argv);