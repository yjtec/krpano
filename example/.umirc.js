export default {
  proxy: {
    '/api': {
      target: 'http://dev.gateway.360vrsh.com/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    }
  }  
}