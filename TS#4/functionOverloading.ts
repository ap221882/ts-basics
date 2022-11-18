//#CHALLENGE
// "x:20,y:40" should pass

interface Coordinate {
  x: number;
  y: number;
}

// When numbers used
function passCoordinatesAsNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

// When numbers used
function passCoordinatesAsObject(object: Coordinate): Coordinate {
  return {
    ...object,
  };
}

//Function overloading
function passCoordinates(x: number, y: number): Coordinate;
function passCoordinates(obj: Coordinate): Coordinate;

function passCoordinates(arg1: unknown, arg2?: unknown) {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

passCoordinates(10, 20);
passCoordinates({ x: 10, y: 20 });
