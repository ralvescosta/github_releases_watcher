module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/src/**/*.module.tsx',
    '!<rootDir>/src/dashboard/**',
    '!<rootDir>/src/navigations/**',
    '!<rootDir>/src/search/**',
    '!<rootDir>/src/settings/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transform: {
    // '^.+\\.(js|ts|tsx)$':
    //   '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js', '<rootDir>/jest/jest.setup.js'],
  verbose: true,
};