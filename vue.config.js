const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    //部署应用包时的基本 URL,./:相对路径
    publicPath: process.env.BASE_URL, 
    outputDir: 'dist/front', // 输出文件目录
    // 配置webpack-dev-server
    devServer: {
        host: '0.0.0.0',
        port: 80,
        hotOnly: true, // 热加载
        historyApiFallback: true,//匹配history路由/
        // 本地node代理
        proxy: {
            '/api': { // 将 /api 替换为 target：指定的url
                target: 'http://cas.dearedu.com/',
                changeOrigin: true, // true，启用跨域
                pathRewrite: {
                    '^/api': '' // 要转发到的地址
                }
            },
        }
    },
    // 配置网页logo
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    // 打包编译优化
    // 去除 .map 文件
    productionSourceMap: false,
    // 代码压缩
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        //生产环境自动删除console
                        compress: {
                            drop_debugger: true,
                            drop_console: true,
                            pure_funcs: ['console.log']
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            ),
                // 打包文件大小配置
                config.performance = {
                    hints: 'warning',
                    //入口起点的最大体积 整数类型（以字节为单位）
                    maxEntrypointSize: 50000000,
                    //生成文件的最大体积 整数类型（以字节为单位 300k）
                    maxAssetSize: 30000000,
                    //只给出 js 文件的性能提示
                    assetFilter: function (assetFilename) {
                        return assetFilename.endsWith('.js');
                    }
                }
        } else {
            // 为开发环境修改配置...
        }
    }
}