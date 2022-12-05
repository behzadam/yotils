import { isString } from "./is-string";

export function isArrayOfString(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => isString(item));
}
