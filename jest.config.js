// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: path.join(__dirname, 'test'),
  testRegex: '.*\\.spec\\.ts$',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  setupFilesAfterEnv: ['jest-extended/all']
};
