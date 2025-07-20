const config = require('jestconfig/jest-web-config');

module.exports = Object.assign({}, config, {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup-jest.ts'],

  collectCoverageFrom: [
    ...config.collectCoverageFrom,
    '!**/*.d.ts',
    '!src/main.ts',
  ],

  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/e2e/cypress',
  ],

  transformIgnorePatterns: [
    'node_modules/(?!.*\.mjs$|@angular|@ngrx|ngx-|@ngx)',
  ],

  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],

  transform: {
    '^.+\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\.(html|svg)$',
      },
    ],
  },
});
