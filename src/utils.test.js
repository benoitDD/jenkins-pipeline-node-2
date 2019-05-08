const utils = require('./utils')

test('Test sum a and b', () => {
    expect(utils.sum(3, 5)).toBe(8)
})