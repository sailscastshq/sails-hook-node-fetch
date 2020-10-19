/**
 * sails-hook-node-fetch
 */

module.exports = function(sails) {
  return {
    initialize: function(done) {
      if (!sails.hooks.helpers) {
        return done(new Error('Cannot load sails-hook-node-fetch without enabling the "helpers" hook!'));
      }

      sails.after('hook:helpers:loaded', function() {
        try {
          if(!sails.hooks.helpers['fetch']) {
            sails.hooks.helpers.furnishHelper('fetch', require('./private/fetch'));
            return done();
          }
        } catch (error) {
          return done(error);
        }

        return done();
      });
    }
  };
};
