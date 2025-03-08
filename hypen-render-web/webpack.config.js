const path = require('path');

module.exports = {
    entry: './src/main.js', // path to your main js file
    experiments: {
        outputModule: true,
    },
    output: {
        libraryTarget: `module`,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // this is the bundled output
    },
    mode: 'development', // or 'production'
};
