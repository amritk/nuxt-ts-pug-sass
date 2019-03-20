import NuxtConfiguration from '@nuxt/config-edge'
import Sass from 'sass'
import pkg from './package.json'

const config: NuxtConfiguration = {
    mode: 'universal',
    debug: !(process.env.NODE_ENV === 'production'),

    // Head and meta tags
    head: {
        title: pkg.name,
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport', content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description', name: 'description', content: pkg.description
            }
        ],
        link: [{
            rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        }]
    },

    // Loading bar color
    loading: {
        color: '#fff'
    },

    // Global css
    css: [],

    // Change src directory
    srcDir: 'src/',

    // Plugins to load
    plugins: [],

    // Nuxt.js modules
    modules: [],

    // Babel
    babel: {
        presets: ['@babel/preset-env'],
        plugins: [
            '@babel/plugin-transform-modules-commonjs',
            'dynamic-import-node',
            '@babel/plugin-syntax-dynamic-import',
            [
                'transform-runtime',
                {
                    polyfill: false
                }
            ]
        ]
    },

    // Build Config
    build: {

        // Extend webpack config
        extend (config, ctx) {

            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(ts|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },

        loaders: {
            sass: {
                implementation: Sass,
            }
        }
    }
}

export default config
