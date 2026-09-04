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

Publishing is automated via [Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) and is triggered by a GitHub Release (see `.github/workflows/publish.yml`). To release:

1. Bump `version` in **both** `clear/package.json` and `exit/package.json` (the workflow publishes both in one release).
2. Commit, push, and create a GitHub Release with the new tag.

No npm token is stored — the workflow uses GitHub OIDC, requires the `release` environment on the trusted-publisher config, and publishes with provenance. Make sure both packages have the trusted publisher registered on npmjs.com (owner `lu-zhengda`, repo `pi-extensions`, workflow `publish.yml`, environment `release`) with direct `npm publish` allowed.