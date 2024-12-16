const path = require('path');

module.exports = function override(config, env) {
  // Add the fallback for 'path'
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
  };

  return config;
};
