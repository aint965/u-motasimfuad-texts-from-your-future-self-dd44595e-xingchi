import { mkdirSync, writeFileSync } from "node:fs";

// Texts From Your Future Self — make.fun entry for @aint965.
// One funny text message from the writer's future self, sent back to
// the present self. No trailing newline: the message is exactly the file.
const ENTRY =
  "Future you: stop looking for your keys. They're in the inside pocket of the jacket you're wearing. You've checked it twice and missed them both times.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
