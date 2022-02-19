class MarsExploration {

  constructor() {
    this.rovers = []
  }

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
    const rover = {
      id: roverId,
      name,
      positionX: parseInt(positionX),
      positionY: parseInt(positionY),
      orientation: orientation
    }
    this.rovers.push(rover)
    return rover
  }

  moveRover(roverId, commands) {

  }

  getRoverPositionMessage(roverId) {

  }
}

module.exports = MarsExploration;