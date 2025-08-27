const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, {
                test: /\.scss$/,
                /*
                Webpack processes loaders from RIGHT to LEFT. 
                First it will invoke sass loader, which will convert our sass to CSS.
                Then it will invoke CSS loader, which will take that converted CSS and convert it to the JavaScript representation,
                and only then Webpack will invoke style loader, which will create style tags inside our HTML page and put CSS into it.

                sass-loader is a Webpack loader that compiles SCSS or SASS files into CSS. It works with sass (Dart Sass) under the hood.
                When bundled, the SCSS will be converted to CSS and injected into the page as a <style> tag.

                css-loader - Allows Webpack to understand @import and url() in CSS files.
                It resolves paths and dependencies in CSS files and doesn't inject CSS into the DOM.

                style-loader - Injects CSS into the DOM by adding a <style> tag.
                It takes the output from css-loader and adds it to the page at runtime.
                */
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'], // Supports all versions of EcmaScripts
                        plugins: ['@babel/plugin-proposal-class-properties', ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }]], // Add the plugin based on the feature which doesnt supported by webpack
                    }
                }
            }
            // {
            //     test: /\.(jpg|png)$/,
            //     type: 'asset/resource'
            // },{
            //     test: /\.svg$/i,
            //     type: 'asset/inline'
            // }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css' // This will create a separate CSS file instead of injecting styles into the DOM
        })
    ]
};