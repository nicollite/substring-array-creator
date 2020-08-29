const ignoreFile = ["src/index.ts", "src/test.ts"];

module.exports = {
  preset: "ts-jest",
  automock: false,
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/*.ts"],
  coverageDirectory: "coverage/",
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", ...ignoreFile],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // roots: ["<rootDir>/src"],
  testTimeout: 60 * 1000, // 60 seconds
  testMatch: [
    // "**/tests/**/*.{test,spec}.+(ts|tsx)",
    // "**/tests/**/*.+(ts|tsx|js)",
    "<rootDir>/src/tests/**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  testPathIgnorePatterns: ["dist/", "node_modules/", "types/"],
};
