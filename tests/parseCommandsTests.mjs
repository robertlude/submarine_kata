/// Internal Dependencies

import parseCommands from '../src/parseCommands.mjs'

/// Module

export default {
  'returns an array with an object with the command from the first word of the given string': () => {
    const result = parseCommands(['abc 123'])

    return result[0].command == 'abc'
  },
  'returns an array with an object with the distance from the second word of the given string, as an integer': () => {
    const result = parseCommands(['abc 123'])

    return result[0].distance == 123
  },
  'parses multiple commands': () => {
    const result = parseCommands([
      'abc 123',
      'xyz 456',
    ])

    return result[0].command  == 'abc'
        && result[0].distance == 123
        && result[1].command  == 'xyz'
        && result[1].distance == 456
  },
}
