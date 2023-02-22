'use strict';

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testMatch: ['**/?(*.)spec.ts?(x)'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '/.[jt]s?$/': [
      'ts-jest',
      {
        tsconfig: require.resolve('./tsconfig.jest.json'),
      },
    ],
  },
};
