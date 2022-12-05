/**
 * Wraps the input in an array even if the input is an array.
 * @param value - input
 * @returns wrapped input in an array.
 * @example
 * ```ts
 * wrapInArray('a')     // ['a']
 * wrapInArray(1)       // [1]
 * wrapInArray(['a'])   // [['a']]
 * ```
 * @public
 */
export function wrapInArray<Type>(value: Type): Type[] {
  return [value];
}
