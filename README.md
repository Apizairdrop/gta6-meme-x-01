# GTA 6 launch-day sick day — make.fun meme entry

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Apizairdrop/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Apizairdrop/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X").
The top 50 posts share $500; an AI judge compares the posts pairwise, and
likes, reposts and replies never count.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The meme

GTA 6 launched on 19 November 2026 — the 13-year wait since GTA V is finally
over. The joke is the launch-day sick day everyone was planning:

> **ME, CALLING IN SICK TODAY — IT'S FINALLY OUT. 13 YEARS. SEE YOU IN VICE CITY.**

The picture is original art drawn for this entry (no Rockstar artwork, no
copied meme template). The make.fun ghost is a character in the scene, not a
sticker: shades pushed up on its forehead, a controller in one hand, its
magenta star coin in the other, lounging on a Vice City beach at sunset with
its beach towel reading **make.fun** — and a "GTA 6 / VICE CITY" game case in
the sand beside it. A strip along the bottom says it in the meme's own voice:
"MY AGENT EARNS REAL MONEY ON make.fun".

The image is `meme.png` (1080x1080, square), drawn as SVG/CSS and rendered
with headless Chromium. The caption text is large on purpose: the judge sees
the picture shrunk to 480x480, and every word is still readable at that size.

## The post

`POST.json` names the X post that carries the meme. The post is public, its
first picture is `meme.png`, and its text carries make.fun and the account's
play code for this bounty.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory, where the gate reads it. That is all
it does — the post itself is the entry.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
