var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"


    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1234,
        writeToDisk: true,
        // open: true,
    },
    module: {
        rules: [

            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]

            },
            {
        
                test: /\.(sa|sc|c)ss$/,
                  use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath:'../'
                      }
                    },
                    "css-loader",
                    'sass-loader',
                  ],
              },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images",
                        }
                    }
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html',

        }),

        new HtmlWebpackPlugin({
            filename: 'book1.html',
            template: './src/book1.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'book2.html',
            template: './src/book2.html',

        }), new HtmlWebpackPlugin({
            filename: 'checkout.html',
            template: './src/checkout.html',

        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new OptimizeCssAssetsPlugin({}),
    ],
};