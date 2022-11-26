function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

//changes according to the argument type
const [str1getter, str1setter] = simpleState(5);
str1setter(5);

//overriding inferred generic types
const [str2getter, str2setter] = simpleState<string | null>(null);
str2setter("Ajay");
