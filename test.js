var assert = require('assert');
var checkEnv = require('./index');

describe('check-env', function() {
  before(function() {
    process.env.OTHER_VAR = 'test';
  });

  it('should throw an error if one env var is missing', function() {
    assert.throws(
      function() {
        checkEnv(['ENV_VAR', 'OTHER_VAR']);
      },
      /Missing environment variable ENV_VAR/
    );
  });

  it('should throw an error if multiple env vars are missing', function() {
    assert.throws(
      function() {
        checkEnv(['ENV_VAR', 'NEW_VAR', 'OTHER_VAR']);
      },
      /Missing environment variables ENV_VAR, NEW_VAR/
    );
  });
});
