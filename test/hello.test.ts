import { expect } from '@jest/globals'
import sum from '../utils/sum'

// write base test
test('adds 1 + 2 to equal 3', function () {
    expect(sum(1, 2)).toBe(3)
})