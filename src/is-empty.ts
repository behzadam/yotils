import isArray from "../array/isArray";
import isObject from "./is-object";
import isString from "./is-string";

function isEmpty<T extends string | object | any[]>(value: T): value is never {
  if (isString(value) || isArray(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  throw new Error(
    `value must be type of string | array | object. ${
      value === null ? "null" : typeof value
    }`
  );
}

export default isEmpty;