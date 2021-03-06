var webpack = require('webpack');
var autoprefixer = require('autoprefixer');//自动修补css浏览器前缀

module.exports = {
    devtool: 'eval-source-map',//生成source map以追踪js错误
    entry:  __dirname + "/index.js",//js入口
    output: {
        path: __dirname + "/server",//输出路径
        filename: "bundle.js"//输出名
    },

    module:{
     loaders:[
          {
              test:/\.js$/,//js loader
              exclude:/node_modules/,
              loader:'babel'//更多配置在.babelrc
          },
          {
              test:/\.css$/,//css loader
              loader: 'style!css'
          },
      ]
    },

    devServer: {//webpack-dev-server 配置
        contentBase: "./server",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot:true,//热更新
        port:4000
    },
    postcss:[
        autoprefixer({browsers:['last 10 versions']})//postcss 插件
    ],

    plugins:[
        new webpack.HotModuleReplacementPlugin()//热更新
    ]
}