/// Node Standard Dependencies

import fs from 'fs'

/// Internal Dependencies

import readInput from '../src/readInput.mjs'

/// Module

export default {
  'returns a string representing the input file contents': () => {
    const expected = fs.readFileSync('submarine_kata_input.txt', {encoding: 'utf8'})

    const result = readInput()

    return result == expected
  },
}
