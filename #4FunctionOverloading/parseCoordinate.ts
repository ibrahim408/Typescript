interface Coordinate {
  x: number;
  y: number;
}

// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return {
//     ...obj,
//   };
// }

// function parseCoordinateFromNumber(x: number, y: number): Coordinate {
//   return {
//     x,
//     y,
//   } as Coordinate;
// }

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;

function parseCoordinate(args1: unknown, args2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof args1 === "object") {
    coord = {
      ...(args1 as Coordinate),
    };
  } else if (typeof args1 === "number") {
    coord = {
      x: args1 as number,
      y: args2 as number,
    };
  } else {
    (args1 as string).split(",").forEach(str => {
      const [key, value] = str.split(":");
      coord[(key as "x") || "y"] = parseInt(value);
    });
  }
  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 49, y: 23 }));
console.log(parseCoordinate("x:12,y:22"));
