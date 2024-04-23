/// Internal Dependencies

import multiply from '../src/multiply.mjs'

/// Module

export default {
  'returns the product of the depth and horizontal attributes of the input object': () => {
    const depth      = 3
        , horizontal = 5

    const expected = 15

    let result = multiply({depth, horizontal})

    return result == expected
  }
}
