/* eslint-disable @typescript-eslint/no-var-requires */
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };
import url from "rollup-plugin-url"

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
export default [
	{
		input: "./src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true
			}
		],
		external: [
			"react"
		],
		plugins: [
			typescript({ tsconfig: "./tsconfig.json" }),
			url(),
			terser()
		]
	}
];