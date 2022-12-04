import { getTag } from "./internal";
import { isObjectLike } from "./is-object-like";

export function isSet<T>(value: T): value is T {
  return isObjectLike(value) && getTag(value) === "[object Set]";
}
