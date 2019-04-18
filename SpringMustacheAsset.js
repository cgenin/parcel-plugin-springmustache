const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const render = require('posthtml-render');

class MustacheAssets extends HTMLAsset {
    constructor(name, options) {
        super(name, options);
        this.type = 'mustache';
        this.isAstDirty = false;
        this.hmrPageReload = true;
    }

};
module.exports = MustacheAssets;