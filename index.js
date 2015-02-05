module.exports = function(variables) {
  var missing = [];

  variables.forEach(function(variable) {
    if (!process.env[variable]) {
      missing.push(variable);
    }
  });

  if (missing.length) {
    if (missing.length === 1) {
      throw new Error('Missing environment variable ' + missing[0]);
    }
    throw new Error('Missing environment variables ' + missing.join(', '));
  }
};
