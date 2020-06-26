module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  // testRegex: "\\.test\\.ts",
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  coveragePathIgnorePatterns: ['node_modules','build'],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}
