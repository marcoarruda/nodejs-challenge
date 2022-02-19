const MarsExploration = require('./MarsExploration');

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

xtest('Move Rover on Plateau - Scenario 1', () => {
  const exploration = new MarsExploration();
  const rover = exploration.landRover(1, 'Eagle', '1 2 N'); // land rover before trying to move it
  const position = exploration.moveRover(1, 'LMLMLMLMM'); // we now have something to move
  expect(position).toStrictEqual({
    newPositionX: 1,
    newPositionY: 3,
    newOrientation: 'N'
  });
});

xtest('Print Rover Position', () => {
  const exploration = new MarsExploration();
  const message = exploration.getRoverPositionMessage(1);
  expect(message).toBe('Rover "Eagle" is now at positioin 1 3 N');
});