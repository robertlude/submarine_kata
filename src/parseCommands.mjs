/// Module

export default lines =>
  lines
    .map(line => line.split(' '))
    .map(([command, distance]) => ({command, distance: parseInt(distance)}))
  undefined
