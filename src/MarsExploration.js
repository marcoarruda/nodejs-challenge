class MarsExploration {

  constructor() {
    this.rovers = []
  }

  definePlateauSize(name, upperRightCoordinates) {
    const [upperX, upperY] = upperRightCoordinates.split(',').map(c => parseInt(c))
    const plateau = {
      name,
      upperX,
      upperY
    }
    return plateau
  }

  landRover(id, name, landingPosition) {
    const [ positionX, positionY, orientation ] = landingPosition.split(' ')
    const rover = {
      id,
      name,
      positionX: parseInt(positionX),
      positionY: parseInt(positionY),
      orientation
    }
    this.rovers.push(rover)
    return rover
  }

  moveRover(roverId, commands) {
    // get rover to move
    const rover = this.rovers.find(r => r.id === roverId)

    // define movements result
    const toTheLeft = { N: 'W', E: 'N', S: 'E', W: 'S' }
    const toTheRight = { N: 'E', E: 'S', S: 'W', W: 'N' }
    const goStraightAheadX = { N: 0, E: 1, S: 0, W: -1 }
    const goStraightAheadY = { N: 1, E: 0, S: -1, W: 0 }

    // handle movement cases
    for (let command of commands) {
      switch (command) {
        case 'L':
          rover.orientation = toTheLeft[rover.orientation]
          break
        case 'R':
          rover.orientation = toTheRight[rover.orientation]
          break
        case 'M':
          rover.positionX += goStraightAheadX[rover.orientation]
          rover.positionY += goStraightAheadY[rover.orientation]
          break
      }
    }

    // return
    return {
      newPositionX: rover.positionX,
      newPositionY: rover.positionY,
      newOrientation: rover.orientation
    }
  }

  getRoverPositionMessage(roverId) {
    const rover = this.rovers.find(r => r.id === roverId)
    return `Rover "${rover.name}" is now at position ${rover.positionX} ${rover.positionY} ${rover.orientation}`
  }
}

module.exports = MarsExploration;