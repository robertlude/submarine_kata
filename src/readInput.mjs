/// Node Standard Dependencies

import fs from 'fs'

/// Module

export default () =>
  fs.readFileSync(
    'submarine_kata_input.txt',
    {encoding: 'utf8'},
  )
