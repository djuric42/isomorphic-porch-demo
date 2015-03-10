'use strict';

var serverData = require('./data/project-data');

/**
 * Returns project data
 *
 * @param {Object} config (optional)
 * @param {function} callback async callback
 *
 * @return {Object} list of projects
 */
module.exports = {
    name: 'projectService',

    read: function(req, resource, params, config, callback) {
        setTimeout(function () {
            callback(null, JSON.parse(JSON.stringify(serverData)));
        }, 10);
    }

};