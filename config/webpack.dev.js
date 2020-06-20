var path = require('path');

var LIB_PATH = path.resolve(__dirname, '../src/index.ts')
var BUILD_PATH = path.resolve(__dirname, '../dist')

module.exports = {

    mode: 'development',
    devtool: 'source-map',

    entry: {
        draw: LIB_PATH
        // testapp: APP_PATH
    },

    output: {
        library: 'draw',
        libraryTarget: 'umd',
        path: BUILD_PATH,
        filename: 'draw.js'
    },

    watchOptions: { poll: true }, // seems to need this for Windows Linux subsystem to watch

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },

    plugins: []

};