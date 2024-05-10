const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  publicPath: './',
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  productionSourceMap: false,
  devServer: {
    proxy: {
      [process.env.VUE_APP_PROXY]: {
        target: process.env.VUE_APP_HOST, //我们的接口域名地址
        ws: true,
        changeOrigin: true, //允许跨域
        pathRewrite: {
          [`^${process.env.VUE_APP_PROXY}`]: '/' // 替换target中的请求地址
        }
      },
      [process.env.VUE_APP_WEATHER_PROXY]: {
        target: process.env.VUE_APP_WEATHER_HOST, //我们的接口域名地址
        ws: true,
        changeOrigin: true, //允许跨域
        pathRewrite: {
          [`^${process.env.VUE_APP_WEATHER_PROXY}`]: '/' // 替换target中的请求地址
        }
      },
      [process.env.VUE_APP_MAP_PROXY]: {
        target: process.env.VUE_APP_MAP_HOST, //我们的接口域名地址
        ws: true,
        changeOrigin: true, //允许跨域
        pathRewrite: {
          [`^${process.env.VUE_APP_MAP_PROXY}`]: '/' // 替换target中的请求地址
        }
      }
    }
  },
  css: {
    sourceMap: !isProduction
  },
  configureWebpack: config => {
    // if (isProduction) {
    //   config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
    //   config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    // }
    config.module.rules
      .filter(rule => {
        return rule.test.toString().indexOf('scss') !== -1
      })
      .forEach(rule => {
        rule.oneOf.forEach(oneOfRule => {
          oneOfRule.use.splice(oneOfRule.use.indexOf(require.resolve('sass-loader')), 0, { loader: require.resolve('css-unicode-loader') })
        })
      })
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
    config.when(!isProduction, config => config.devtool('cheap-source-map'))

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1024 * 4 }))

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
