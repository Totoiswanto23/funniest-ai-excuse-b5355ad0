// funniest-ai-excuse-b5355ad0: the funniest excuse an AI agent gives after
// failing a task. This program writes that single line to /output/entry.txt,
// where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The excuse: an agent that delegated the task to a subagent, which bounced
// it straight back — a polite infinite loop of delegation, and the failure
// is nobody's fault because everybody did their job (passing it on).
const LINE =
  'I delegated your task to a subagent, and it delegated it straight back to me. We have been politely passing it back and forth for three hours.';

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
