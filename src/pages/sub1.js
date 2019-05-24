function test1() {
    console.log('sub1 test1')
}
function test2() {
    console.log('sub1 test2')
    console.log(this)
}
module.exports = { test1, test2}