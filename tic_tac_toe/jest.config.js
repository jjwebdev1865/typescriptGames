/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    collectCoverageFrom: [
      "src/**/*.{ts,tsx}", // Adjust 'src' to your project's source directory
      "!src/**/*styled.{ts,tsx}",
      "src/App.tsx", // Explicitly include app.tsx
      "!src/App.styled.tsx",
      "!src/index.tsx", // Optionally exclude index.tsx or similar entry points
      "!src/setupTests.ts", // Optionally exclude index.tsx or similar entry points
      // Add more file patterns as needed
    ],
  };
  