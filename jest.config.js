'use strict';

module.exports = {
  projects: [
    {
      clearMocks: true,
      displayName: 'test',
      // preset: 'ts-jest', // TODO: Add in future
      testEnvironment: 'node',
      testRegex: '/__tests__/.*\\.spec\\.(j|t)s$',
    },
  ],
};
