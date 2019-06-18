import sub1 from '../src/pages/sub1'
// const sub1 = require('../src/pages/sub1')

test('sub1 test3的name等于 zhou', () => {
    expect(sub1.test3().name).toBe('zhou')
})