function test1() {
    console.log('sub1 test1')
}
function test2() {
    console.log('sub1 test2')
    console.log(this)
}
function test3() {
    return {
        name: 'zhou'
    }
}
module.exports = { test1, test2, test3}