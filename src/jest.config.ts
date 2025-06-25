import type { Config } from 'jest';

const config: Config = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    collectCoverageFrom: [
        '**/domain/**/*.ts',       // Modelos, puertos, y BL/Casos de Uso
        '**/repositories/**/*.ts', // Adaptadores y sus interfaces (puertos)
        '**/services/**/*.ts',     // Otros servicios y middlewares
        '**/controller/**/*.ts'    // Controladores
    ],
    testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.spec.ts'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};

export default config;