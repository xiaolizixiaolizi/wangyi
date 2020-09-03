// 实现自动化导入import。
const context = require.context('./', false, /\.js$/)
console.log(context.keys()) // ["./index.js", "./news.js", "./request.js", "./user.js"]
let res = {}
context.keys().forEach(filePath => {
  if (['./index.js', './request.js'].includes(filePath)) return
  const value = context(filePath).default
  res = { ...res, ...value }
})

export default res
