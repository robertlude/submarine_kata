/// Module

export default commands => {
  let depth      = 0
    , horizontal = 0

  for (const commandData of commands) {
    const command  = commandData.command
        , distance = commandData.distance

    switch (command) {
      case 'forward':
        horizontal += distance
        break
      case 'down':
        depth += distance
        break
      case 'up':
        depth -= distance

        if (depth < 0) depth = 0

        break
      default:
        throw `Unknown command: ${command}`
    }
  }

  return {
    depth,
    horizontal,
  }
}
