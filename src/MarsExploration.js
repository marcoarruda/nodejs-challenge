class MarsExploration {

  definePlateauSize(name, upperRightCoordinates) {
    const [upperX, upperY] = upperRightCoordinates.split(',')
    const plateau = {
      name,
      upperX: parseInt(upperX),
      upperY: parseInt(upperY)
    }
    return plateau
  }

  landRover(roverId, name, landingPosition) {

  }

  moveRover(roverId, commands) {

  }

  getRoverPositionMessage(roverId) {

  }
}

module.exports = MarsExploration;