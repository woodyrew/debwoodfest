'use strict';
/* eslint-env es6 */

const invitee = function (options) {
    const file = options.data.root;

    const name = file.name + (file.also ? `, ${file.also}` : '');

    return encodeURIComponent(name);
};

module.exports = invitee;
