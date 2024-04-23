/// Internal Dependencies

import parseInputs from '../src/parseInputs.mjs'

/// Module

export default {
  'returns an array with one input, and splits the input string into individual lines': () => {
    const result = parseInputs('a\nb\nc')

    return result[0][0] == 'a'
        && result[0][1] == 'b'
        && result[0][2] == 'c'
  },
}
