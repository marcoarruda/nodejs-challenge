class MarsExploration {

  constructor() {
    this.rovers = []
    this.plateau = null
  }

  definePlateauSize(name, upperRightCoordinates) {
    const [upperX, upperY] = upperRightCoordinates.split(',').map(c => parseInt(c))
    const plateau = {
      name,
      upperX,
      upperY
    }
    this.plateau = plateau
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
          const newPositionX = rover.positionX + goStraightAheadX[rover.orientation]
          if (newPositionX <= this.plateau.upperX && newPositionX >= 0) {
            rover.positionX = newPositionX
          }
          const newPositionY = rover.positionY + goStraightAheadY[rover.orientation]
          if (newPositionY <= this.plateau.upperY && newPositionY >= 0) {
            rover.positionY = newPositionY
          }
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