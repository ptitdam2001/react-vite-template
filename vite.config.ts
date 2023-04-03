import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			exclude: ["/**/*.svg", "/*.svg"],
		}),
	],
	test: {
		globals: true,
		environment: "jsdom",
		reporters: ["default", "html"],
		setupFiles: "./setupTest.ts",
	},
});
