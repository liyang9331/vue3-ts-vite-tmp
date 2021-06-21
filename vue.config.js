// GZIP
// const CompressionPlugin = require('compression-webpack-plugin')
// js压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    publicPath: './', //修改打包根路径
    outputDir: 'dist', // 在npm run build时 生成文件的目录 type:string, default:'dist' ${srcFile}
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    chainWebpack: config => {
        // 初始化页面title
        config.plugin('html').tap(args => {
            args[0].title = 'vue3-template'
            return args
        });
        // 图片压缩
        // // config.plugins.delete('prefetch')
        // config.module.rule('images')
        //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({ bypassOnDebug: true })
        // const imagesRule = config.module.rule("images")
        //     // 将图片大小限制设置为 6kb，低于6kb的图片全部被内联，高于6kb的图片会放在单独的img文件夹中
        // imagesRule
        //     .use('url-loader')
        //     .loader('url-loader')
        //     .tap(options => Object.assign(options, { limit: 6144 }))
    },
    configureWebpack: config => {
        // 为生产环境修改配置...
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
            config.mode = 'production';
        // 打包文件大小配置
        config.performance = {
                hints: 'warning',
                //入口起点的最大体积 整数类型（以字节为单位）
                maxEntrypointSize: 50000000,
                //生成文件的最大体积 整数类型（以字节为单位 300k）
                maxAssetSize: 30000000,
                //只给出 js 文件的性能提示
                assetFilter: function(assetFilename) {
                    return assetFilename.endsWith('.js');
                }
            }
            // 开启GZIP压缩
            // config.plugins.push(
            //     new CompressionPlugin({
            //         test: /\.js$|\.html$|\.css/, //匹配文件名
            //         threshold: 10240, //对超过10k的数据进行压缩
            //         deleteOriginalAssets: false //是否删除原文件
            //     })
            // )
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
}