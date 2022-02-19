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
    const [ positionX, positionY, orientation ] = landingPosition.split(' ')
    return {
      id: roverId,
      name,
      positionX: parseInt(positionX),
      positionY: parseInt(positionY),
      orientation: orientation
    }
  }

  moveRover(roverId, commands) {

  }

  getRoverPositionMessage(roverId) {

  }
}

module.exports = MarsExploration;