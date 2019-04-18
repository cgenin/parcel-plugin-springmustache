module.exports = function (bundler) {
    bundler.addAssetType('mustache', require.resolve('./SpringMustacheAsset'))
    bundler.addPackager('mustache', require.resolve('./SpringMustachePackager'))
};