const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    devtool: 'null',
    entry: "./src/pages/main.js",
    output: {
        path: __dirname + "/../dist",
        filename: "bundle-[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("粥 版权"),
        new HtmlWebpackPlugin({
            template: __dirname + "/../index.tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(), // 自动分配ID
        // new ExtractTextWebpackPlugin("style.css"),
        new CleanWebpackPlugin()
    ]
}