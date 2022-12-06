import { Dictionary, PredicateFunction } from "./types";

export function omitBy<T extends Dictionary<T>>(
  object: T,
  fun: PredicateFunction
): Dictionary<T> {
  return Object.keys(object)
    .filter((key) => !fun(object[key], key))
    .reduce((acc, key) => ((acc[key] = object[key]), acc), {} as Dictionary<T>);
}
