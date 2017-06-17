'use strict';
/* eslint-env es6 */

const test = require('tap').test;
const fs = require('fs');
const path = require('path');

const site_path = path.join(__dirname, '../site');
const assets_path = path.join(site_path, 'assets');


test('site should have key files', (assert) => {
    const site_paths = [
        path.join(assets_path, 'fonts/fontawesome-webfont.ttf'),
        path.join(site_path, 'index.html')
    ];

    site_paths.forEach((filepath) => {
        assert.doesNotThrow(() => { fs.accessSync(filepath, fs.F_OK); }, void 0, `${filepath} is present`);
    });

    assert.end();
});
