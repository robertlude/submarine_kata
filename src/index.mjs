/// Internal Dependencies

import multiply      from './multiply.mjs'
import navigate      from './navigate.mjs'
import outputResult  from './outputResult.mjs'
import parseCommands from './parseCommands.mjs'
import parseInputs   from './parseInputs.mjs'
import readInput     from './readInput.mjs'

/// Module

parseInputs(readInput())
  .map(parseCommands)
  .map(navigate)
  .map(multiply)
  .map(outputResult)
