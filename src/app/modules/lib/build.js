(function() {

    var requirejs = require('requirejs'),
        path = require('path'),
        build = 'build',
        temp = build + '_temp',
        src = 'src',
        mainConfigFile = '../../../requireConfig.js',
        root = path.dirname(mainConfigFile),
        pathTemp = path.relative(root, path.join(process.cwd(), temp)),
        pathBuild = path.relative(root, path.join(process.cwd(), build)),
        pathCWD = path.relative(root, path.join(process.cwd()));

    console.log('Root       -', root);
    console.log('CWD        -', process.cwd());
    console.log('CWD Path   -', pathCWD);
    console.log('Build Path -', pathBuild);
    console.log('Temp Path  -', pathTemp);

    /**
     * This array of excludes should kick out all dependencies that are used in lib* modules
     * lib* modules themselves should override this list
     * @type {string[]}
     */
    var defaultExlude = [
            'excludedComponent'
        ],
        exclude = defaultExlude,
        files = ['build_temp/main.js', 'build_temp/main_en-US.js'];


    requirejs.optimize({
        mainConfigFile: mainConfigFile,
        dir: build, // relative to CWD?
        paths: files.reduce(function(r, file) {

            file = file.replace('.js', '');
            r[path.basename(file)] = path.join(pathCWD, file);

            console.log(r);

            return r;

        }, {}),
        appDir: pathTemp,
        optimize: 'none',
        exclude: exclude,
        generateSourceMaps: true,
        modules: files.map(function(file) {

            console.log('Added main file', file);

            return {
                name: path.basename(file.replace('.js', '')),
                exclude: exclude
            };

        })
    });

})();