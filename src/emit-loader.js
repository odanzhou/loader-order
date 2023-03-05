const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const options = loaderUtils.getOptions(this) || {}
  console.log('emitFile', source)
  const url = loaderUtils.interpolateName(this, '[name].txt', source)
  console.log('urlurlurlurlurlurl', url, this.emitFile)
  // webpack 中具有这个方法
  if(this.emitFile) {
    this.emitFile(url, source);
  }
  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;
  return `${esModule ? 'export default' : 'module.exports =' } './${url}'`
}