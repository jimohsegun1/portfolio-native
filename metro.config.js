const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Support .avif and .webp assets
config.resolver.assetExts.push('avif');

module.exports = withNativeWind(config, { input: './global.css' });