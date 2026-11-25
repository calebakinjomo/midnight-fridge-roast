// Midnight Fridge Roast — make.fun entry program (Node 22+).
// Writes a single one-line roast of a smart fridge that refuses to open
// after midnight to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "My fridge locks itself at midnight like a bouncer who's seen me eat the last slice and lost all respect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
