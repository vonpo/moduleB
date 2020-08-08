const moduleA = require('moduleA');

function getValue () {
  return 'module-b-master-v3' + ' ' + moduleA.getValue();
}

module.exports = {
  getValue
}
