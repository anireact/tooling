/* eslint-disable global-require */
/* eslint-disable max-lines-per-function */

module.exports = () => ({
    presets: [
        [
            require('@babel/preset-env'),
            {
                modules: false,
                shippedProposals: true,
                useBuiltIns: 'usage',
            },
        ],
        require('@babel/preset-typescript'),
        require('@babel/preset-react'),
    ],
    plugins: [
        require('@babel/plugin-transform-runtime'),
        require('@babel/plugin-proposal-class-properties'),
        require('@babel/plugin-syntax-dynamic-import'),
        [
            require('styled-jsx/babel'),
            {
                optimizeForSpeed: true,
                sourceMaps: true,
                vendorPrefixes: true,
            },
        ],
    ],
    env: {
        test: {
            presets: [
                [
                    require('@babel/preset-env'),
                    {
                        modules: 'commonjs',
                        shippedProposals: true,
                        useBuiltIns: 'usage',
                    },
                ],
                require('@babel/preset-typescript'),
                require('@babel/preset-react'),
            ],
            plugins: [
                require('@babel/plugin-transform-runtime'),
                require('@babel/plugin-proposal-class-properties'),
                require('@babel/plugin-syntax-dynamic-import'),
                [
                    require('styled-jsx/babel'),
                    {
                        optimizeForSpeed: true,
                        sourceMaps: true,
                        vendorPrefixes: true,
                    },
                ],
            ],
        },
    },
});
