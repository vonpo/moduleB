const moduleA = require('moduleA');

function getValue () {
  return 'module-b-master-v4' + ' ' + moduleA.getValue();
}

module.exports = {
  getValue
}
