const pkg = require('./package.json')
module.exports = str => {
  str += pkg.name
  console.log(str)
}
