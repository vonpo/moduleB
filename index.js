const moduleA = require('marcin-test-modulea');

function getValue () {
  return 'module-b-master-v5' + ' ' + moduleA.getValue();
}

module.exports = {
  getValue
}
