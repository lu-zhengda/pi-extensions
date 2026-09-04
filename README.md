# pi-extensions

Two independent pi extensions, each published separately to npm:

| Package | Command | What it does |
|---|---|---|
| [`pi-ext-clear`](./clear) | `/clear` | Clear the terminal and start a new session |
| [`pi-ext-exit`](./exit) | `/exit` | Exit pi, like Ctrl+C |

## Install

```bash
pi install npm:pi-ext-clear
pi install npm:pi-ext-exit
```

## Usage

- `/clear` — wipes the screen (and scrollback where supported), then starts a fresh session.
- `/exit` — graceful shutdown, same path as the built-in `/quit`.

## Dev

```bash
pi -e ./clear/extensions/clear.ts   # try /clear without installing
pi -e ./exit/extensions/exit.ts     # try /exit without installing
```

### Repository layout

Each directory is a standalone, publishable pi package:

```
clear/
  package.json            # npm package: pi-ext-clear
  extensions/clear.ts
exit/
  package.json            # npm package: pi-ext-exit
  extensions/exit.ts
```

## Releasing

Publishing is automated. Push to `main` and the `publish` workflow publishes any package whose files changed. To release a change:

1. Bump `version` in that package's `package.json`.
2. Commit and push to `main`.

The workflow reads the npm token from the `NPM_TOKEN` repository secret (a granular npm access token with read-and-write on both packages).