module.exports = {
  projects: [
    {
      verbose: true,
      clearMocks: true,
      displayName: 'test',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testRegex: '/__tests__/.*\\.spec\\.(j|t)s$',
      transform: {'.(j|t)s$': ['ts-jest']}
    },
  ],
};
