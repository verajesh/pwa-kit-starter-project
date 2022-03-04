/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// const Webpack = require('webpack')
// const WebpackDevServer = require('webpack-dev-server')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config = require('pwa-kit-react-sdk/webpack/config')
let addSass = false

// const complier = Webpack(config)
config = config.map((root) => {
    if (root?.module && root?.module?.rules.length && !addSass) {
        root.module.rules.push({
            test: /\.scss$/,
            use: [
                root.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, //4. Inject styles into DOM
                'css-loader', //3. Turns css into commonjs
                'postcss-loader', //2. Loader to process CSS
                'sass-loader' //1. Turns sass into css
            ]
        })
        addSass = true
    }
    return root
})

// config[0].module.rules.push({
//     test: /\.scss$/,
//     use: [
//         'style-loader', //3. Inject styles into DOM
//         'css-loader', //2. Turns css into commonjs
//         'sass-loader' //1. Turns sass into css
//     ]
// })

console.log('--------------------------Rajesh-----------')
console.log(config[0].module.rules)
console.log(config[0].mode)
module.exports = config
