# /exit — pi extension

Exit pi with one command, just like Ctrl+C.

## Install

```bash
pi install npm:pi-ext-exit
```

(or restart pi, or run `/reload`, after installing)

## Usage

In pi's TUI, type:

```
/exit
```

It uses the same graceful shutdown path as the built-in `/quit`: pending work settles, then `session_shutdown` fires and pi exits.

## Source

https://github.com/lu-zhengda/pi-extensions/tree/main/exit