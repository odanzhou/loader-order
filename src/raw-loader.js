const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const { name } = loaderUtils.getOptions(this)
  console.log('name', name)
  // 处理安全性问题
  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
  // 将文件转化为模块
  return `export default ${json}`
}