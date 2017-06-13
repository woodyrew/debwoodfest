'use strict';
/* eslint-env es6 */

// const debug  = require('debug')('handlebars-markdown');
const marked     = require('marked');
const handlebars = require('handlebars');

const markdown = (text, options) => {
    /* eslint no-invalid-this:0 */
    if (options) {
        return marked(text || '');
    }
    else {
        options = text;
        return new handlebars.SafeString(marked(options.fn(this)));
    }
};

module.exports = markdown;
