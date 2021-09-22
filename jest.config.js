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
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
