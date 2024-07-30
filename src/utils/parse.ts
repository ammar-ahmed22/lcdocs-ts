
export function parseFunctionSignature(sig: string): [string, string[], string] {
  const functionPattern = /^function\s+(\w+)\s*\(([^)]*)\)\s*:\s*(.+)$/;
  const match = sig.match(functionPattern);

  if (!match) {
    throw new Error(`Invalid function signature!`);
  }

  const name = match[1];
  const argsString = match[2];
  const returnType = match[3];

  const args = argsString.split(",").map(arg => arg.trim().split(":")[1].trim());

  return [name, args, returnType];
}