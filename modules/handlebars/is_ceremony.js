'use strict';
/* eslint-env es6 */

const invitee = function (options) {
    const file = options.data.root;

    return file.layout === 'ceremony.hbs';
};

module.exports = invitee;
