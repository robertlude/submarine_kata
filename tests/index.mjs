/// Internal Dependencies

import multiplyTests      from './multiplyTests.mjs'
import navigateTests      from './navigateTests.mjs'
import outputResultTests  from './outputResultTests.mjs'
import parseCommandsTests from './parseCommandsTests.mjs'
import parseInputsTests   from './parseInputsTests.mjs'
import readInputTests     from './readInputTests.mjs'

/// Module

const tests = {
  multiply:      multiplyTests,
  navigate:      navigateTests,
  outputResult:  outputResultTests,
  parseCommands: parseCommandsTests,
  parseInputs:   parseInputsTests,
  readInput:     readInputTests,
}

for (const groupName in tests) {
  const testGroup = tests[groupName]

  console.log(groupName)

  for (const testName in testGroup) {
    const test = testGroup[testName]

    let passed
    let error  = undefined

    try {
      passed = test()
    } catch (e) {
      passed = false
      error  = e
    }

    console.log(`  ${passed ? '✅' : '❌'} ${testName}`)

    if (error) console.log(error)
  }
}
