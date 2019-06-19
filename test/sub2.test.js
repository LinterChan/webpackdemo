import sub2 from '../src/pages/sub2'
// const sub2 = require('../src/pages/sub2')

test('sub2 test1的name等于 zhou', () => {
    expect(sub2.test1().name).toBe('zhou')
})
test('sub2 test2: 1+2=3', () => {
    expect(sub2.test2(1, 2)).toBe(3)
})