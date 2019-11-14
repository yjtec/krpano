export default {
  proxy: {
    '/api': {
      target: 'http://test.gatewy.360vrsh.com/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    }
  }  
}