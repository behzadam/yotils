import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { apiExtractor } from "rollup-plugin-api-extractor";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json"));

export default {
  input: "./src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
    { file: pkg.browser, format: "umd" },
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    apiExtractor({
      configFile: "./api-extractor.json",
    }),
  ],
};
