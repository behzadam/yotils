import { getLength } from "./get-length";

export function isEmpty<T>(value: T): value is T {
  if (value == null) return true;
  return getLength(value) === 0;
}
