/**
 * Module dependencies.
 */
var IoC = require('electrolyte');


/**
 * Draw routes.
 *
 * Route handlers are created using Electrolyte, which automatically wires
 * together any necessary components, including logging
 * facilities, configuration settings, etc.
 */
module.exports = function routes() {

    this.get('/', (req, res, next) =>
        IoC.create('handlers/list').then(
            function (data) {
                data(req, res, next);
            }));

}
