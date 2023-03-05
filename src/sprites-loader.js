// 雪碧图loader

const Spritesmith = require('spritesmith')
const fs = require('fs')
const path = require('path')

const sprites = ['./src/images/o.jpg', './src/images/cat.jpg']

Spritesmith.run({ src: sprites}, (err, result) => {
  if(err) {
    console.error(err)
  }
  console.log('result', result)
  console.log(result.image)
  console.log(result.coordinates)
  console.log(result.properties)
  fs.writeFileSync(path.join(__dirname, '../dist/sprites.jpg'), result.image)
})