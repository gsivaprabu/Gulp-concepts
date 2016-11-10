'use strict';
module.exports = function() {
    var client = './src/client/';
    var config = {
        temp: './.tmp',
        /**
         * Files paths
         */
        alljs: [
            './src/**/*.js', //Source Folder
            './*.js' // Root Folder
        ],
        less: client + 'styles/styles.less'
    };
    return config;
};
