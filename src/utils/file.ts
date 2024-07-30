import path from "path";
import fs from "fs";
import type { Difficulty } from "./create";
import { toTitleCase} from "./parse";

export const ABSOLUTE_PATH = "/Users/ammar/Documents/Projects/lcdocs";

export function problemDirPath(name: string, difficulty: Difficulty){
  const dirName = `${toTitleCase(difficulty)} - ${name}`;
  return path.join(ABSOLUTE_PATH, dirName);
}

export function copyDirectory(src: fs.PathLike, dest: fs.PathLike) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src.toString(), entry.name);
    const destPath = path.join(dest.toString(), entry.name);
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export function doesProblemExist(name: string): boolean {
  const entries = fs.readdirSync(path.join(ABSOLUTE_PATH), { withFileTypes: true });
  for (let entry of entries) {
    if (entry.isDirectory()) {
      const [diff, pName] = entry.name.split("-");
      if (pName && pName.trim().toLowerCase() === name.toLowerCase()) {
        return true;
      }
    }
  }

  return false;
}

export function findAllProblems(): [string, string][] {
  const entries = fs.readdirSync(ABSOLUTE_PATH, { withFileTypes: true });
  let result: [string, string][] = [];
  for (let entry of entries) {
    if (entry.isDirectory()) {
      let regex = /^(Easy|Medium|Hard) - .*$/;
      if (regex.test(entry.name)) {
        const [diff, name] = entry.name.split("-").map(s => s.trim());
        result.push([diff, name]);
      }
    }
  }

  return result;
}