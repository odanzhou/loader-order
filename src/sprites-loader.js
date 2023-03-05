// 雪碧图loader

const Spritesmith = require('spritesmith')
const fs = require('fs')
const path = require('path')

const sprites = ['./src/images/o.jpg', './src/images/cat.jpg']
// 测试 Spritesmith
// Spritesmith.run({ src: sprites}, (err, result) => {
//   if(err) {
//     console.error(err)
//   }
//   console.log('result', result)
//   console.log(result.image)
//   console.log(result.coordinates)
//   console.log(result.properties)
//   fs.writeFileSync(path.join(__dirname, '../dist/sprites.jpg'), result.image)
// }).run({ src: sprites}, (err, result) => {
//   if(err) {
//     console.error(err)
//   }
//   console.log('result', result)
//   console.log(result.image)
//   console.log(result.coordinates)
//   console.log(result.properties)
//   fs.writeFileSync(path.join(__dirname, '../dist/sprites.jpg'), result.image)
// })

module.exports = function(source) {
  // 异步
  const callback = this.async()
  const imgReg = /url\((\S*)\?__sprite/
  const imgRegG = new RegExp(imgReg, 'g')
  const imgs = source.match(imgRegG)
  const matchedImgs = []
  for(let i = 0; i < imgs.length; i++) {
    const img = imgs[i].match(imgReg)[1]
    matchedImgs.push(path.join(__dirname, img))
  }
  console.log('matchedImgs', imgs, matchedImgs)
  return 
  Spritesmith.run({ src: matchedImgs}, (err, result) => {
    if(err) {
      console.error(err)
      callback(err, source)
    }
    // 写入文件
    fs.writeFileSync(path.join(__dirname, '../dist/sprite.jpg'), result.image)
    // 替换文件
    source = source.replace(imgRegG, (match) => {
      return `url("dist/sprite.jpg")`
    })
    callback(err, source)
  })
}