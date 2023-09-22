const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})
//lintOnSave, no se que hizo, pero saco el mensaje molesto de
//Component name "Home" should always be multi-word