const MarsExploration = require('./MarsExploration');

describe('Fundamental MarsExploration class methods', () => {
  test('Define Mars Plateou Size', () => {
    const exploration = new MarsExploration();
    const plateau = exploration.definePlateauSize('North Plateau', '10,10');
    expect(plateau).toStrictEqual({
      name: 'North Plateau',
      upperX: 10,
      upperY: 10
    });
  });

  test('Land Rover on Mars', () => {
    const exploration = new MarsExploration();
    const rover = exploration.landRover(1, 'Eagle', '1 2 N');
    expect(rover).toStrictEqual({
      id: 1,
      name: 'Eagle',
      positionX: 1,
      positionY: 2,
      orientation: 'N'
    });
  });

  test('Move Rover on Plateau - Scenario 1', () => {
    const exploration = new MarsExploration();
    exploration.definePlateauSize('plateau', '10,10')
    const rover = exploration.landRover(1, 'Eagle', '1 2 N'); // land rover before trying to move it
    const position = exploration.moveRover(1, 'LMLMLMLMM'); // we now have something to move
    expect(position).toStrictEqual({
      newPositionX: 1,
      newPositionY: 3,
      newOrientation: 'N'
    });
  });

  test('Move Rover on Plateau - Scenario 2', () => {
    const exploration = new MarsExploration();
    exploration.definePlateauSize('plateau', '10,10')
    const rover = exploration.landRover(1, 'Eagle', '3 3 E');
    const position = exploration.moveRover(1, 'MRRMMRMRRM');
    expect(position).toStrictEqual({
      newPositionX: 2,
      newPositionY: 3,
      newOrientation: 'S'
    });
  });

  test('Print Rover Position', () => {
    const exploration = new MarsExploration();
    const rover = exploration.landRover(1, 'Eagle', '1 3 N'); // land rover before trying to move it
    const message = exploration.getRoverPositionMessage(1);
    expect(message).toBe('Rover "Eagle" is now at position 1 3 N');
  });
})

describe('Testing out-of-boundaries movements', () => {
  test('Heading to north', () => {
    const exploration = new MarsExploration();
    exploration.definePlateauSize('plateau', '10,10')
    const [originalX, originalY, originalOrientation] = [5, 10, 'N']
    const rover = exploration.landRover(1, 'Eagle', `${originalX} ${originalY} ${originalOrientation}`);
    const position = exploration.moveRover(1, 'M');
    expect(position).toStrictEqual({
      newPositionX: originalX,
      newPositionY: originalY,
      newOrientation: originalOrientation
    });
  });
  test('Heading to east', () => {
    const exploration = new MarsExploration();
    exploration.definePlateauSize('plateau', '10,10')
    const [originalX, originalY, originalOrientation] = [10, 5, 'E']
    const rover = exploration.landRover(1, 'Eagle', `${originalX} ${originalY} ${originalOrientation}`);
    const position = exploration.moveRover(1, 'M');
    expect(position).toStrictEqual({
      newPositionX: originalX,
      newPositionY: originalY,
      newOrientation: originalOrientation
    });
  });
  test('Heading to south', () => {
    const exploration = new MarsExploration();
    exploration.definePlateauSize('plateau', '10,10')
    const [originalX, originalY, originalOrientation] = [5, 0, 'S']
    const rover = exploration.landRover(1, 'Eagle', `${originalX} ${originalY} ${originalOrientation}`);
    const position = exploration.moveRover(1, 'M');
    expect(position).toStrictEqual({
      newPositionX: originalX,
      newPositionY: originalY,
      newOrientation: originalOrientation
    });
  });
  test('Heading to west', () => {
    const exploration = new MarsExploration();
    exploration.definePlateauSize('plateau', '10,10')
    const [originalX, originalY, originalOrientation] = [0, 5, 'W']
    const rover = exploration.landRover(1, 'Eagle', `${originalX} ${originalY} ${originalOrientation}`);
    const position = exploration.moveRover(1, 'M');
    expect(position).toStrictEqual({
      newPositionX: originalX,
      newPositionY: originalY,
      newOrientation: originalOrientation
    });
  });
})
