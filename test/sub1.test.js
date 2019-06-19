import sub1 from '../src/pages/sub1'
// const sub1 = require('../src/pages/sub1')

// test('sub1 test1的name等于 zhou', () => {
//     expect(sub1.test1().name).toBe('zhou')
// })
test('sub1 test2: 1+2=3', () => {
    expect(sub1.test2(1, 2)).toBe(3)
})