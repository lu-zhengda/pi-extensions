# /clear — pi extension

Clear the terminal and start a new session with one command.

## Install

```bash
pi install npm:pi-ext-clear
```

(or restart pi, or run `/reload`, after installing)

## Usage

In pi's TUI, type:

```
/clear
```

What it does:
- Clears the terminal screen (and scrollback where the terminal supports `\x1b[3J` — kitty, iTerm2, WezTerm).
- Starts a new session, like the built-in `/new`.

## How it works

Uses `ctx.ui.custom()` only to reach pi's real terminal sink so it never writes raw ANSI past the TUI's renderer, then calls `ctx.newSession()`.

## Source

https://github.com/lu-zhengda/pi-extensions/tree/main/clear