// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry itself is the X post: the meme image plus its caption, posted
// from a public account. This program's only job is to hand the house the
// address of that post, so the house can read it back from X and show the
// picture and the text to the judge.
//
// It reads POST.json from the repository root and writes the same bytes to
// the output directory, where the gate picks them up. It writes nothing
// else, touches no network, and reads no clock, so two runs of it always
// produce identical output.
//
// Outside the grader's container the two directories are passed in through
// the environment, standing in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(REPO_DIR, 'POST.json');
const TARGET = join(OUT_DIR, 'POST.json');

let postJson: Buffer;
try {
  postJson = readFileSync(SOURCE);
} catch (err) {
  console.error(`could not read ${SOURCE}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(TARGET, postJson);
} catch (err) {
  console.error(`could not write ${TARGET}: ${(err as Error).message}`);
  process.exit(1);
}
