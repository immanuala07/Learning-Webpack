const path = require('path');

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
    module:{
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource'
            },{
                test: /\.svg$/i,
                type: 'asset/inline'
            }
        ]
    }
};