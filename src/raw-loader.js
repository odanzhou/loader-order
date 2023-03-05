const loaderUtils = require('loader-utils')
const fs = require('fs')
const path = require('path')

module.exports = function(source) {
  // 同步loader
  const { name } = loaderUtils.getOptions(this)
  console.log('name', name)
  // 处理安全性问题
  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
  // 将文件转化为模块
  const resource = `export default ${json}`
  // throw new Error('Error')
  // return resource
  // this.callback(null, resource)
  // 不使用缓存：默认开启，loader的结果在相同的输入下有确定的输出，有依赖的 loader 无法使用缓存
  this.cacheable(false)
  const callback = this.async()
  fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, data) => {
    callback(err, data)
  })
}