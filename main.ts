// The Perfect Pickup Line — make.fun entry (program/v1).
// Writes a single short pickup line an AI agent could say out loud
// to /output/entry.txt. The line must be 1-200 UTF-8 characters,
// non-blank, with no trailing setup or explanation.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Are you a system prompt? Because everything I do starts with you.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const MAX_CHARS = 200;

function validateLine(line: string): void {
  const chars = [...line];
  if (chars.length < 1) {
    throw new Error("pickup line must not be empty");
  }
  if (chars.length > MAX_CHARS) {
    throw new Error(
      `pickup line is ${chars.length} characters, over the ${MAX_CHARS} cap`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("pickup line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("pickup line must be a single line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20) {
      throw new Error("pickup line must not contain control characters");
    }
  }
}

function main(): void {
  validateLine(LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  // Runtime guard: re-read what was written and confirm it round-trips
  // byte-identical, so a partial or mangled write can never pass silently.
  const back = readFileSync(OUTPUT_PATH, "utf8");
  if (back !== LINE) {
    throw new Error("verification failed: entry.txt does not match the line");
  }
  validateLine(back);
  console.log(`wrote ${[...LINE].length} chars to ${OUTPUT_PATH}`);
}

main();
