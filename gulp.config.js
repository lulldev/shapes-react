/*global module*/

module.exports = function() {
    var libraries = [
        'node_modules/react/dist/react-with-addons.min.js',
        'node_modules/react-dom/dist/react-dom.min.js'
    ];

    var injections = [
        'build/lib/react-with-addons.min.js',
        'build/lib/react-dom.min.js',
        'build/lib/*.js',
        'build/scripts/app.min.js',
        'build/css/app.min.css'
    ];


    var config = {
        src: 'src',
        dest: 'build',
        scripts: 'build/scripts',
        style: 'build/styles',
        lib: 'build/lib',
        scriptSource: 'src/**/*.ts{,x}',
        libSources: libraries,
        injectFiles: injections
    };

    return config;
};