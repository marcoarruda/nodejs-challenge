const MarsExploration = require('./MarsExploration');

describe('Turn left', () => {
  const exploration = new MarsExploration();
  exploration.definePlateauSize('whatever', '10,10')

  test('Heading to north', () => {
    const rover = exploration.landRover(1, 'Eagle', '3 3 N');
    exploration.moveRover(rover.id, 'L')
    expect(rover.orientation).toBe('W')
  })
  test('Heading to west', () => {
    const rover = exploration.landRover(2, 'Eagle', '3 3 W');
    exploration.moveRover(rover.id, 'L')
    expect(rover.orientation).toBe('S')
  })
  test('Heading to south', () => {
    const rover = exploration.landRover(3, 'Eagle', '3 3 S');
    exploration.moveRover(rover.id, 'L')
    expect(rover.orientation).toBe('E')
  })
  test('Heading to east', () => {
    const rover = exploration.landRover(4, 'Eagle', '3 3 E');
    exploration.moveRover(rover.id, 'L')
    expect(rover.orientation).toBe('N')
  })
});

describe('Turn right', () => {

  const exploration = new MarsExploration();
  exploration.definePlateauSize('whatever', '10,10')

  test('Heading to north', () => {
    const rover = exploration.landRover(1, 'Eagle', '3 3 N');
    exploration.moveRover(rover.id, 'R')
    expect(rover.orientation).toBe('E')
  })
  test('Heading to west', () => {
    const rover = exploration.landRover(2, 'Eagle', '3 3 W');
    exploration.moveRover(rover.id, 'R')
    expect(rover.orientation).toBe('N')
  })
  test('Heading to south', () => {
    const rover = exploration.landRover(3, 'Eagle', '3 3 S');
    exploration.moveRover(rover.id, 'R')
    expect(rover.orientation).toBe('W')
  })
  test('Heading to east', () => {
    const rover = exploration.landRover(4, 'Eagle', '3 3 E');
    exploration.moveRover(rover.id, 'R')
    expect(rover.orientation).toBe('S')
  })
});

describe('Go forward', () => {
  const exploration = new MarsExploration();
  exploration.definePlateauSize('whatever', '10,10')

  test('Heading to north', () => {
    const rover = exploration.landRover(1, 'Eagle', '3 3 N');
    exploration.moveRover(rover.id, 'M')
    expect(rover.positionX).toBe(3)
    expect(rover.positionY).toBe(4)
  })
  test('Heading to west', () => {
    const rover = exploration.landRover(2, 'Eagle', '3 3 W');
    exploration.moveRover(rover.id, 'M')
    expect(rover.positionX).toBe(2)
    expect(rover.positionY).toBe(3)
  })
  test('Heading to south', () => {
    const rover = exploration.landRover(3, 'Eagle', '3 3 S');
    exploration.moveRover(rover.id, 'M')
    expect(rover.positionX).toBe(3)
    expect(rover.positionY).toBe(2)
  })
  test('Heading to east', () => {
    const rover = exploration.landRover(4, 'Eagle', '3 3 E');
    exploration.moveRover(rover.id, 'M')
    expect(rover.positionX).toBe(4)
    expect(rover.positionY).toBe(3)
  })
});
