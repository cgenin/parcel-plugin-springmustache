const Packager = require('parcel-bundler/src/packagers/HTMLPackager');

class MustachePackager extends Packager {

    constructor(bundle, bundler) {
        super(bundle, bundler);
        this.bundle.name = this.bundle.name.replace('static/bundle', 'templates');
    }


}



module.exports = MustachePackager;