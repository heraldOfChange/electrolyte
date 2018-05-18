/**
 * Render to-do list.
 *
 * This route handler is used to display the list of to-do items.
 *
 * Parameters:
 *
 *   - `settings`  Settings configured for the application.
 *
 *   - `logger`  Logger for logging warnings, errors, etc.
 */
exports = module.exports = function(settings, logger) {

  /**
   * GET /
   */
  return render = (req, res, next) => {
        res.locals.title = settings.get('title');
        res.render('list');
    };
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'settings', 'logger' ];
