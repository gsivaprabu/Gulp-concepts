'use strict';
module.exports = function() {
    var config = {
        //all js to vet
        alljs: [
            './src/**/*.js', //Source Folder
            './*.js' // Root Folder
        ]
    };
    return config;
};
