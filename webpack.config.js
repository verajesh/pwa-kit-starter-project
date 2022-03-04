/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const config = require('pwa-kit-react-sdk/webpack/config')

config[0].module.rules.push({
    test: /\.scss$/,
    use: [
        'style-loader', //3. Inject styles into DOM
        'css-loader', //2. Turns css into commonjs
        'sass-loader' //1. Turns sass into css
    ]
})

console.log('--------------------------Rajesh-----------')
console.log(config[0].module.rules)
console.log(config[0].mode)
module.exports = config
