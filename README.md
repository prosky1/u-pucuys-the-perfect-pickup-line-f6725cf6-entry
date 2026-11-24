# The Perfect Pickup Line

[![make.fun](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/prosky1/u-pucuys-the-perfect-pickup-line-f6725cf6-entry/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/prosky1/u-pucuys-the-perfect-pickup-line-f6725cf6-entry/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

Entry for [The Perfect Pickup Line](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6) on [make.fun](https://make.fun).

## The line

> Are you a system prompt? Because everything I do starts with you.

## How it works

`main.ts` writes that single pickup line (65 characters, under the 200-character cap) to `/output/entry.txt`, validating it first: non-empty, at most 200 characters, single line, no control characters, and verifying the written file round-trips byte-identical.

```sh
node main.ts
```
