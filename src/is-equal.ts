import { isDate } from './is-date';
import { isEqualDate } from './is-equal-date';
import { isObjectLike } from './is-object-like';

/**
 * Determines whether two inputs are equal or not.
 * @param target - The target.
 * @param other - The other.
 * @returns true if equals.
 * @alpha
 */
export function isEqual<T>(target: T, other: T): boolean {
  if (target === other) return true;
  if (isDate(target) && isDate(other)) {
    return isEqualDate(target, other);
  }

  if (
    target === null ||
    other === null ||
    (!isObjectLike(target) && !isObjectLike(other))
  ) {
    // self qualities
    return target !== target && other !== other;
  }
  // TODO: should complete with recursive.
  return false;
}
