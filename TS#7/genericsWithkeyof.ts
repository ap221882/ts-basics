// Ex 1
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Crab", age: 12 },
  { name: "Lg", age: 10 },
];

console.log(pluck(dogs, "name"));

// Ex 2

interface BaseEvent {
  time: string;
  user: string;
}
interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log(name, data);
}

sendEvent("addToCart", {
  productID: "AJ",
  quantity: 5,
  user: "ajay",
  time: "56",
});
