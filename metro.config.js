// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

config.cacheStores = ({ FileStore }) => [new FileStore({ root: '.cache' })]

module.exports = config
