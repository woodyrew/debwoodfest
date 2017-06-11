'use strict';
/* eslint-env es6 */

// const debug = require('debug')('metalsmith-rename-guest-urls');
const error = require('debug')('metalsmith-rename-guest-urls:error');

const css_csum = (files, metalsmith, done) => {
    Object.keys(files)
    .filter(filename => filename.indexOf('guest/') === 0)
    .every((filename) => {
        const file = files[filename];
        const new_filename = `guest/${file.id}/index.html`;
        const target_missing = !files[new_filename];
        if (target_missing) {
            files[new_filename] = file;

            delete files[filename];
        }
        else {
            error(`File: ${new_filename} already exists - change 'id'`);
        }
        return target_missing;
    });
    done();
};

module.exports = css_csum;
