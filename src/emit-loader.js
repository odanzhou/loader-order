const loaderUtils = require('loader-utils')

module.exports = function(source) {
  console.log('emitFile', source)
  const url = loaderUtils.interpolateName(this, '[name].txt', source)
  // webpack 中具有这个方法
  if(this.emitFile) {
    this.emitFile(url, source);
  } else {
    return source;
  }
}