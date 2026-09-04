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

To publish one (after creating a GitHub repo and replacing `<you>` in the package manifests):

```bash
cd clear && npm publish
cd ../exit && npm publish
```