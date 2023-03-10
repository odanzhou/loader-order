const  { runLoaders } = require('loader-runner')
const fs = require('fs')
const path = require('path')

runLoaders({
  resource: path.join(__dirname, './src/demo.txt'),
  loaders: [
    path.join(__dirname, './src/emit-loader.js'),
    {
      loader: path.join(__dirname, './src/raw-loader.js'),
      options: {
        name: 'test',
      },
    },
  ],
  context: {
    minimize: true,
  },
  readResource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.error(err) : console.log(result)
})
// 雪碧图
runLoaders({
  resource: './src/index.css',
  loaders: [
    path.resolve(__dirname, './src/sprites-loader'),
  ],
  readResource: fs.readFile.bind(fs),
}, (err, result) => {
  err ? console.error(err) : null
})