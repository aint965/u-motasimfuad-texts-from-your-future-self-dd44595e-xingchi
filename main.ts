import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Texts From Your Future Self — make.fun entry for @aint965.
// One funny text message from the writer's future self, sent back to
// the present self. No trailing newline: the message is exactly the file.

// The entry text, kept as a single constant. It is the whole entry:
// one funny text message from the writer's future self, under 200
// characters. Do not edit this string — the joke is final.
const ENTRY =
  "Future you: stop looking for your keys. They're in the inside pocket of the jacket you're wearing. You've checked it twice and missed them both times.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;
const DEFAULT_OUTPUT_PATH = "/output/entry.txt";

// Build the entry text deliberately and check it against the gate
// before anything is written, so a bad text fails loudly here
// instead of silently producing an invalid entry.
function buildEntryText(): string {
  const text = ENTRY;
  const length = [...text].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `Entry must be ${MIN_LENGTH}–${MAX_LENGTH} characters, got ${length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  return text;
}

function main(): void {
  // ENTRY_OUTPUT_PATH is only a local-test override; the graded run
  // uses the default /output/entry.txt. No randomness, time, or
  // environment-dependent content ever reaches the output file.
  const outputPath = process.env.ENTRY_OUTPUT_PATH ?? DEFAULT_OUTPUT_PATH;
  const text = buildEntryText();
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, text, "utf8");
}

main();
