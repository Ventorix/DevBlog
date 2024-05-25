import type { Config } from 'jest';
import path from 'path';

const config: Config = {
	clearMocks: true,
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
	rootDir: '../../',
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	modulePaths: ['<rootDir>src'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'StyledComponent.tsx'),
	},
	testEnvironment: 'jsdom',
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
};

export default config;
