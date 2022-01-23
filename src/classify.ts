import { Primitive } from "./utils/types"

function classify<T extends Primitive>(array: T[]): any{
  return array.reduce((group: any, key) => {
    group[key] = !group[key] ? 1 : ++group[key]
    return group
  }, {})
}

export default classify