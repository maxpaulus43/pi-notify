import { spawn } from "node:child_process";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.on("agent_settled", (_event, ctx) => {
		if (ctx.mode !== "tui" || process.platform !== "darwin" || process.env.TERM_PROGRAM !== "ghostty") return;

		// Ghostty owns this notification, so clicking it can return to its originating surface.
		process.stdout.write("\x1b]777;notify;Pi;Ready for input\x1b\\");

		const sound = process.env.PI_NOTIFY_SOUND_CMD;
		if (sound) spawn(sound, { shell: true, detached: true, stdio: "ignore" }).unref();
	});
}
