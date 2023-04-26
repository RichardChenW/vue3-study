const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      "http":{
        target: 'http://127.0.0.1:8000',
        pathRewrite:{"^http": "127.0.0.1:8000/personInfo"},
        ws: true,
        changeOrigin: true
      }
    }
  }
})
