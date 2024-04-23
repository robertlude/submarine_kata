/// Internal Dependencies

import multiplyTests      from './multiplyTests.mjs'
import navigateTests      from './navigateTests.mjs'
import outputResultTests  from './outputResultTests.mjs'
import parseCommandsTests from './parseCommandsTests.mjs'

/// Module

const tests = {
  multiply:           multiplyTests,
  navigate:           navigateTests,
  outputResultTests:  outputResultTests,
  parseCommandsTests: parseCommandsTests,
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
