// with primitives
type coord = [x: number, y: number, z: number];

function addCoord(a: coord, b: coord): coord {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

// with functions
function getterSetter(str: string): [() => string, (str: string) => void] {
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [strGetter, strSetter] = getterSetter("Ajay");
