const isProd = process.env.NODE_ENV === 'production'
const withImages = require('next-images')
module.exports = withImages({
  assetPrefix: isProd ? 'https://indiawantsbitcoin.org/out' : '',
  webpack(config, options) {
    return config
  }
})
