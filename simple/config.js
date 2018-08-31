/**
 * Create on {{date}}
 */

const path = require('path')
const HOST = ''; //代理域名

module.exports = {
    title: '{{dir}}', // document.title
    output: {
        path: path.resolve(process.cwd(), 'dist/{{dir}}'), //输出路径, 默认dist目录下同名文件
        publicPath: './' //打包静态资源的路径，默认./
    },
    build: {
        // template: 'index.php', //打包引用的模板文件
        // filename: 'index.php'  //打包输出的文件名
    },
    devServer: {
        proxy: {
            '/api': {
                target: HOST,
                changeOrigin: true
            }
        }
    }
}