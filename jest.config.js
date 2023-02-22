module.exports = {
  projects: [
    {
      verbose: true,
      clearMocks: true,
      displayName: 'test',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testRegex: '.*\\.spec\\.(j|t)s$',
      transform: { '.(j|t)s$': ['ts-jest'] },
    },
  ],
};
