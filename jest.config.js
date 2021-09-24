module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  watchPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  testMatch: [
    '<rootDir>/**/*.spec.js'
  ],
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html'
      }
    }
  },
  setupFiles: ['<rootDir>/jest.init.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**', '!**/dist/**', '!**/coverage/**']
}
