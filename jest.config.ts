import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@lib/(.*)$": "<rootDir>/src/$1",
  },
};

export default jestConfig;
