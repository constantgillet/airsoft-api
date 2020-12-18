const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    devtool: 'source-map',
    devServer:
    {
        contentBase: './dist',
        open: true,
        host: '0.0.0.0', //Lance sur le serveur local
        useLocalIp: true,
        historyApiFallback: true,
        proxy: {
            '/references': 'http://localhost:8000',
            '/uploads': 'http://localhost:8000'
        }
    },
    entry: path.resolve(__dirname, '../src/index.js'),
    output:
    {
        filename: 'bundle.[hash].js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    },
    plugins:
    [
        new CopyWebpackPlugin(([ { from: 'static' } ])),
        new MiniCssExtractPlugin({filename: 'style.css'}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module:
    {
        rules:
        [   
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    { 
                        loader: 'css-loader', 
                        options: { sourceMap: true } 
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                          // Provide path to the file with resources
                          resources: path.resolve(__dirname, '../src/style/resources.scss'),
                          
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'images/' }
                    }    
                ]
            },
            {
                test: /\.(ttf|otf|woff|woff2|eot)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'fonts/' }
                    }    
                ]
            },
        ]
    }
}