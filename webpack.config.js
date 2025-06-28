const path = require('path');
const { Parser } = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        // publicPath in Webpack defines the base URL for all assets in your project. It tells Webpack where to serve or load assets from.
        // It's important when deploying to different environments (local, CDN, subfolder).
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            }, {
                test: /\.css$/,
                /*
                css-loader - Allows Webpack to understand @import and url() in CSS files.
                It resolves paths and dependencies in CSS files and doesn't inject CSS into the DOM.

                style-loader - Injects CSS into the DOM by adding a <style> tag.
                It takes the output from css-loader and adds it to the page at runtime.
                */
                use: ['style-loader', 'css-loader'] 
            }
            // {
            //     test: /\.(jpg|png)$/,
            //     type: 'asset/resource'
            // },{
            //     test: /\.svg$/i,
            //     type: 'asset/inline'
            // }
        ]
    }
};