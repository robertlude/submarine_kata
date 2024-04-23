/// Internal Dependencies

import multiplyTests from './multiplyTests.mjs'

/// Module

const tests = {
  multiply: multiplyTests,
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