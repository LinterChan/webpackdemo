if (module.hot) { module.hot.accept() } // 入口文件加这段逻辑，启用hot热更新（局部更新）
const sub1 = require('./sub1.js')
import '../static/main.css'
sub1.test1()
sub1.test2()
let a = 'test--no travis.yml'
console.log(a)