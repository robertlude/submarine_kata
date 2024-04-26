/// Module

export default commands => {
  let aim        = 0
    , depth      = 0
    , horizontal = 0

  for (const commandData of commands) {
    const command  = commandData.command
        , distance = commandData.distance

    switch (command) {
      case 'forward':
        horizontal += distance
        depth      += distance * aim

        if (depth < 0) depth = 0
        break
      case 'down':
        aim += distance

        break
      case 'up':
        aim -= distance

        break
      default:
        throw `Unknown command: ${command}`
    }
  }

  return {
    depth,
    horizontal,
  }

  return undefined
}
