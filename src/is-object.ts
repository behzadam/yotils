/**
 * Determines whether the input is an object or not.
 * @param value - input.
 * @returns true if the input is an object, false otherwise.
 * @remarks
 * In JavaScript every thing is an object except primitive types:
 * string - number - bigint - boolean - undefined - symbol - null
 * MDN:
 * https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 *
 * In JavaScript, null is marked as one of the primitive values,
 * because its behavior is seemingly primitive.
 * However, when using the typeof operator, it returns "object".
 * MDN:
 * https://developer.mozilla.org/en-US/docs/Glossary/Null
 *
 * @example
 * ```ts
 * isObject({}) // true
 * isObject(Function) // true
 * isObject([]) // true
 * isObject(null) // false
 * isObject(1) // false
 * isObject(true) // false
 * ```
 * @public
 */
export function isObject<T>(value: T): value is T & object {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
