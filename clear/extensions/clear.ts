import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Text } from "@earendil-works/pi-tui";

/**
 * /clear — wipe the terminal and start a fresh session.
 *
 * Clears the screen (and scrollback where the terminal supports \x1b[3J,
 * e.g. kitty, iTerm2, WezTerm), then switches to a brand-new session.
 *
 * ctx.ui.custom() is used only to reach pi's real terminal sink so we never
 * write raw ANSI past the TUI's own renderer.
 */
export default function (pi: ExtensionAPI) {
	pi.registerCommand("clear", {
		description: "Clear the terminal and start a new session",
		handler: async (_args, ctx) => {
			if (ctx.mode === "tui" && ctx.hasUI) {
				await ctx.ui.custom<null>((tui, _theme, _kb, done) => {
					tui.terminal.clearScreen(); // \x1b[2J\x1b[H
					tui.terminal.write("\x1b[3J"); // clear scrollback where supported
					done(null); // resolve immediately; component below is ignored
					return new Text("", 0, 0);
				});
			}
			await ctx.newSession({});
		},
	});
}