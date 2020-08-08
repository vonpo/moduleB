const moduleA = require('moduleA');

function getValue () {
  return 'module-b-master-v2' + ' ' + moduleA.getValue();
}

module.exports = {
  getValue
}
