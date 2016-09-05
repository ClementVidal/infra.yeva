var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var config = require('./config');

module.exports = webpackMerge(commonConfig, {

    // Setup source map for dev
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('build/dev'),
        publicPath: 'http://localhost:8080' + config.publicPath,
        filename: '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    plugins: [
        new webpack.DefinePlugin({
            'build.environment': JSON.stringify('dev')
        })
    ]
});
