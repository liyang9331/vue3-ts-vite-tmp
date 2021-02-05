module.exports={
    devServer: {
        // host: '192.168.40.220', // 原为: hotst: 'localhost'
        // port: 8080,
        hotOnly: true,// 热加载
        proxy: { // 跨域配置
            '/api': { // 过滤的api
                target: 'http://www.api.com/', // 要访问的URL
                changeOrigin: true, // true，启用跨域
                pathRewrite: { // 要转发到的地址，根据需要也可不配置
                    '^/api':''
                }
            }
        }
    }
}