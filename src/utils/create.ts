import fs from "fs";
import path from "path";
import { problemDirPath, ABSOLUTE_PATH, copyDirectory, findAllProblems } from "./file"
import { toTitleCase } from "./parse";


export type Difficulty = "easy" | "medium" | "hard";

type ProblemParams = {
  functionSignature: string,
  functionName: string,
  argsTypes: string[],
  returnType: string
}


export function createProblemDir(name: string, difficulty: Difficulty, params: ProblemParams) {
  const dirPath = problemDirPath(name, difficulty);
  const templatePath = path.join(ABSOLUTE_PATH, "template");
  copyDirectory(templatePath, dirPath);
  updateProblem(name, difficulty, params.functionSignature, params.argsTypes, params.returnType);
  updateTest(name, difficulty, params.functionName);
  updateDocs(name, difficulty);
  updateReadme(name, difficulty);
  updateBadgeValues();
}

function updateProblem(name: string, difficulty: Difficulty, functionSignature: string, argsType: string[], returnType: string) {
  const dirPath = problemDirPath(name, difficulty);
  const filePath = path.join(dirPath, "index.ts");
  if (!fs.existsSync(filePath)) {
    throw new Error("Must create problem directory before updating!")
  }
  let fileContents = `export type ArgsType = [${argsType.join(",")}];\n`;
  fileContents += `export type ReturnType = ${returnType};\n\n`;
  fileContents += `export ${functionSignature} {\n\n}`;
  fs.writeFileSync(filePath, fileContents)
}

function updateTest(name: string, difficulty: Difficulty, functionName: string) {
  const dirPath = problemDirPath(name, difficulty);
  const filePath = path.join(dirPath, "index.spec.ts");
  if (!fs.existsSync(filePath)) {
    throw new Error("Must create problem directory before updating!");
  }
  let fileContents = fs.readFileSync(filePath, "utf-8");
  fileContents = fileContents.replace(new RegExp("add", "g"), functionName);
  fileContents = fileContents.replace("Add", name);
  fs.writeFileSync(filePath, fileContents);
}

function updateDocs(name: string, difficulty: Difficulty) {
  const dirPath = problemDirPath(name, difficulty);
  const filePath = path.join(dirPath, "docs.md");
  if (!fs.existsSync(filePath)) {
    throw new Error("Must create problem directory before updating!");
  }

  let fileContents = fs.readFileSync(filePath, "utf-8");
  fileContents = fileContents.replace("# Add", `# ${name}`);
  fs.writeFileSync(filePath, fileContents);
}

function replaceBadgeValue(file: string, difficulty: Difficulty, value: number) {
  let regex = new RegExp(`${toTitleCase(difficulty)}_\\d+`);
  file = file.replace(regex, `${toTitleCase(difficulty)}_${value}`);
  return file;
}

function updateReadme(name: string, difficulty: Difficulty) {
  const filePath = path.join(ABSOLUTE_PATH, "README.md");
  let fileContents = fs.readFileSync(filePath, "utf-8");
  let replaceString = `<!-- ${toTitleCase(difficulty)} Add here -->`
  let dirName = `${toTitleCase(difficulty)} - ${name}`;
  fileContents = fileContents.replace(replaceString, `- [${name}](./${encodeURIComponent(dirName)}/docs.md)\n${replaceString}`);
  fs.writeFileSync(filePath, fileContents);
}

function updateBadgeValues() {
  const filePath = path.join(ABSOLUTE_PATH, "README.md");
  let fileContents = fs.readFileSync(filePath, "utf-8");
  let problems = findAllProblems();
  console.log(problems);
  let easy = 0;
  let med = 0;
  let hard = 0;
  for (let [diff, name] of problems) {
    console.log(diff);
    if (diff === "Easy") easy++;
    if (diff === "Medium") med++;
    if (diff === "Hard") hard++;
  }
  fileContents = replaceBadgeValue(fileContents, "easy", easy);
  fileContents = replaceBadgeValue(fileContents, "medium", med);
  fileContents = replaceBadgeValue(fileContents, "hard", hard);
  fs.writeFileSync(filePath, fileContents);
}