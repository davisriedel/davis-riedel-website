default:
  just --list

dev:
  bun next dev --turbopack

build:
  bun next build

check:
  bunx biome check --write src

start:
  bun next start
