var path = require('path');
module.exports = {
    entry: './src/app1.js',
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
};