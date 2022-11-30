import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import typescript from "rollup-plugin-typescript2";
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';

const name = require("./package.json").main.replace(/\.js$/, "");

const bundle = (config) => ({
  ...config,
  input: "./src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [esbuild, typescript(), terser(), cleanup()],
    output: [
      {
        file: `${name}.js`,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: `${name}.mjs`,
        format: "es",
        sourcemap: false,
      },
    ],
  }),
  bundle({
    plugins: [dts, typescript()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  }),
];
