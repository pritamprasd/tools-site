const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Match CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.wasm$/,
                type: 'javascript/auto',
                loader: 'wasm-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
            runtimeCaching: [{
                urlPattern: ({ request, url }) => "*",
                handler: 'StaleWhileRevalidate',
            }]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/manifest.json',
                    to: 'manifest.json'
                },
                {
                    from: 'public/images', // Source directory where your PNG files are located
                    to: 'images',       // Destination directory in 'dist'
                },
                {
                    from: 'src/wasm-crypto/pkg/wasm_crypto_bg.wasm'               
                }
            ]
        }),
    ],
    performance: {
        maxEntrypointSize: 8196000,
        maxAssetSize: 8196000
    },
};
