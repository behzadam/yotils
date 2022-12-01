import { isArray } from "./is-array";
import { isObject } from "./is-object";
import { isString } from "./is-string";

export function isEmpty<T>(value: T): value is T {
  if (value == null) return true;

  if (isString(value) || isArray(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return true;
}
