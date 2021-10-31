const path = require("path");
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  assetsDir: "static",
  indexPath: "index.html",
  configureWebpack:(config)=>{
    config.resolve={  //配置解析名
      extensions:['.js','.json','.vue'],//自动添加尾缀
      alias:{
        'vue':'vue/dist/vue.js',
        '@':path.resolve(__dirname,"./src"),
        'public':path.resolve(__dirname,"./public"),
        '@c':path.resolve(__dirname,"./src/components"),
        'common':path.resolve(__dirname,"./src/common"),
        'api':path.resolve(__dirname,"./src/api"),
        'views':path.resolve(__dirname,"./src/views"),
        'data':path.resolve(__dirname,"./src/data"),
      }
    }
  },

  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/mian.scss";`
      }

    },

    modules: false,
  },
  // webpack-dev-server 相关配置

  devServer: {
    open: false, //open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
    host: "0.0.0.0", //默认是 localhost。如果你希望服务器外部可访问，指定如下 host: '0.0.0.0'，设置之后之后可以访问ip地址
    port: 8080,
    hot: true, //hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
    https: false,
    hotOnly: false, // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
    proxy: {
      "/api": {
        target: "http://101.132.47.208:8081", //目标接口域名
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "", //重写接口
        },
      },
    }, // 设置代理
    before: (app) => {},
  },


  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};

