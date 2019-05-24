const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    devtool: 'eval-source-map',
    entry: "./src/pages/main.js",
    output: {
        path: __dirname + "/../dist",
        filename: "bundle.js",
        // publicPath: '/dist' // 默认'/'，打包文件在内存中的路径
    },
    devServer: {
        contentBase: "./",
        port: 3000,
        inline: true,
        hot: true
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
        })
    ]
}