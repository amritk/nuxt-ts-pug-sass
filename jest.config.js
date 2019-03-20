module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: ['js', 'vue', 'json', 'ts'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
        '.*\\.(vue)$': 'vue-jest'
    },
    collectCoverage: true,
    testURL: 'http://localhost/',
    globals: {
        'ts-jest': {
            isolatedModules: true,
            tsConfig: '<rootDir>/tsconfig.json'
        },
    }
}
