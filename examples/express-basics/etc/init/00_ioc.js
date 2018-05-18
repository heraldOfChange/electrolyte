/**
 * Module dependencies.
 */
var ioc = require('electrolyte');

/**
 * Initialize IoC container.
 *
 * The IoC loader needs to be configured with the location where components
 * are found.  In this case, components are split accross two directories.
 *
 * Route handlers are implemented as components, and located in `app/handlers`.
 *
 * All other components (including logging facilities,
 * etc.) are located in `app/components`.
 */
module.exports = function() {

  ioc.use('handlers', ioc.dir('app/handlers'));
  ioc.use(ioc.dir('app/components'));

}