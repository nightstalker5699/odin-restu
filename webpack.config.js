const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")


module.exports = {
    mode: "development",
    entry:"./src/index.js",
    devtool:"inline-source-map",
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist')
    },

    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpeg|jpg|gif|svg)$/i,
                type:"asset/resource"
            }
        ]
    }
}