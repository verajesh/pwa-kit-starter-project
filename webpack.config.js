/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// const Webpack = require('webpack')
// const WebpackDevServer = require('webpack-dev-server')
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

let config = require('pwa-kit-react-sdk/webpack/config')
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let addSass = false

// const complier = Webpack(config)
config = config.map((root) => {
    if (root?.module && root?.module?.rules.length && !addSass) {
        if (root?.plugins && root.mode === 'development') {
            root.plugins.push(
                new MiniCssExtractPlugin({
                    filename: '[name].css'
                })
                // new CleanWebpackPlugin()
            )
        }
        root.module.rules.push({
            test: /\.scss$/,
            use: [
                // {
                //     loader: 'style-loader',
                //     options: {
                //         insert: 'body'
                //     }
                // }, //4. Inject styles into DOM
                root.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, //4. Inject styles into DOM
                'css-loader', //3. Turns css into commonjs
                'postcss-loader', //2. Loader to process CSS
                'sass-loader' //1. Turns sass into css
            ]
        })
        addSass = true
        root.optimization = {
            minimizer: [new OptimizeCssAssetsPlugin(), new HtmlWebpackPlugin()]
        }
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
