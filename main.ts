// Midnight Fridge Roast — make.fun entry program (Node 22+).
// Writes a single one-line roast of a smart fridge that refuses to open
// after midnight to /output/entry.txt, deterministically.
//
// The roast is a fixed constant, so every run produces the exact same
// 104-character entry; the program guards that invariant before writing
// (a non-empty, single-line entry), so a bad edit fails loudly instead of
// silently emitting an empty or multi-line file.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "My fridge locks itself at midnight like a bouncer who's seen me eat the last slice and lost all respect.";

// Named output paths so the write location is declared once, not repeated.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Guard the entry invariant before touching the filesystem: it must be a
// non-empty single line, matching the 104-character entry the bounty scores.
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a non-empty single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
