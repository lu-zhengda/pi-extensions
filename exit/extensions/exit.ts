import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

/**
 * /exit — leave pi, similar to Ctrl+C.
 *
 * Delegates to the same graceful-shutdown path as the built-in /quit:
 * pending work settles, then session_shutdown fires and pi exits.
 */
export default function (pi: ExtensionAPI) {
	pi.registerCommand("exit", {
		description: "Exit pi (like Ctrl+C)",
		handler: async (_args, ctx) => {
			ctx.shutdown();
		},
	});
}