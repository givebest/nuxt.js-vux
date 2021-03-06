const pkg = require('./package')
const path = require('path')
const vuxLoader = require('vux-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        href: '/js/lib/GB-respond.js'
      }
    ],
    script: [
      {
        src: '/js/lib/GB-respond.js',
        type: 'text/javascript'
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vux/src/styles/reset.less',
    'vux/src/styles/1px.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vux-plugins',
      ssr: false
    },
    {
      src: '~/plugins/vux-components',
      ssr: true
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // See https://segmentfault.com/a/1190000010815403
  proxy: [
    ['/api', {
      target: 'http://httpbin.org',
      pathRewrite: { '^/api': '' }
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    /* extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    } */
    extend(config, {
      isDev,
      isClient
    }) {
      const configs = vuxLoader.merge(config, {
        options: {
          ssr: true
        },
        plugins: ['vux-ui', {
            name: 'less-theme',
            path: path.join(__dirname, './assets/css/theme.less')
          },
        ],
      })
      return configs
    }
  },
}
