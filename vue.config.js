const IsProduction = process.env.NODE_ENV === "production";
module.exports = {
    publicPath: './', //修改打包根路径
    // 配置webpack-dev-server
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hotOnly: true, // 热加载
        // 本地node代理
        proxy: {
            '/api': { // 将 /api 替换为 target：指定的url
                target: 'http://www.api.com/',
                changeOrigin: true, // true，启用跨域
                pathRewrite: {
                    '^/api': '' // 要转发到的地址
                }
            }
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
    chainWebpack: config => {
        if (IsProduction) {
            // 图片压缩
            config.plugins.delete('prefetch')
            config.module.rule('images')
                .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({ bypassOnDebug: true })
            const imagesRule = config.module.rule("images")
            // 将图片大小限制设置为 6kb，低于6kb的图片全部被内联，高于6kb的图片会放在单独的img文件夹中
            imagesRule
                .use('url-loader')
                .loader('url-loader')
                .tap(options => Object.assign(options, { limit: 6144 }))
        }

    },
    // 代码压缩
    configureWebpack: config => {
        if (IsProduction) {
            const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
                    parallel: false
                })
            )
        }

    }
}