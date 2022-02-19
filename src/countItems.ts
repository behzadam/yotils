import { Primitive } from "./types";

function countItems<T extends Primitive>(array: T[]): any {
  return array.reduce((acc: any, current) => {
    acc[current] = !acc[current] ? 1 : ++acc[current];
    return acc;
  }, {});
}

export default countItems;
