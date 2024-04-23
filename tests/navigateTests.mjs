/// Internal Dependencies

import navigate from '../src/navigate.mjs'

/// Module

export default {
  'moves the submarine forward when given a forward command': () => {
    let result = navigate([
      {
        command: 'forward',
        distance: 3,
      },
    ])

    return result.depth == 0 && result.horizontal == 3
  },
  'moves the submarine down when given a down command': () => {
    let result = navigate([
      {
        command: 'down',
        distance: 4,
      },
    ])

    return result.depth == 4 && result.horizontal == 0
  },
  'moves the submarine up when given an up command': () => {
    let result = navigate([
      {
        command: 'down',
        distance: 5,
      },
      {
        command: 'up',
        distance: 2,
      },
    ])

    return result.depth == 3 && result.horizontal == 0
  },
  'does not move the submarine up past 0 when given an up command': () => {
    let result = navigate([
      {
        command: 'down',
        distance: 3,
      },
      {
        command: 'up',
        distance: 5,
      },
    ])

    return result.depth == 0 && result.horizontal == 0
  },
  'combines the result of all given commands, in the order given': () => {
    let result = navigate([
      {
        command: 'forward',
        distance: 1,
      },
      {
        command: 'down',
        distance: 3,
      },
      {
        command: 'up',
        distance: 5,
      },
      {
        command: 'forward',
        distance: 4,
      },
      {
        command: 'down',
        distance: 2,
      },
    ])

    return result.depth == 2 && result.horizontal == 5
  },
}
