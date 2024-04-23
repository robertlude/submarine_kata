/// Internal Dependencies

import outputResult from '../src/outputResult.mjs'

/// Module

export default {
  'passes the result to console.log': () => {
    const originalLog = console.log

    let passedValue

    console.log = value => { passedValue = value }

    outputResult(123789)

    console.log = originalLog

    return passedValue == 123789
  }
}
