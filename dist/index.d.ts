/**
 * TypeScript Utility Library.
 *
 * @packageDocumentation
 */

declare type AnyObject = Record<keyof any, unknown>;

/**
 * Compares all items in the given array and returns true if they are same.
 * @param array - Given array.
 * @returns true | false
 * @example
 *
 * ```ts
 * areSame([1, 1, 1, 1]) // true
 * areSame(["one", "one", "one"]) // true
 * areSame([1, 2]) // false
 * ```
 * @public
 */
export declare function areSame<T extends string | number | boolean>(array: Required<T[]>): boolean;

/* Excluded from this release type: countItems */

/**
 * Gets length of string | array | object
 * @param value - string | array | object
 * @returns length of the input or 0
 *
 * @public
 */
export declare function getLength<T>(value: T): number;

/**
 * Determines whether an array has duplicates.
 * @param array - input
 * @returns true if array has duplicates, false otherwise.
 * @example
 * ```ts
 * hasDuplicates(["one", "one", "two"]) // true
 * hasDuplicates([1, 2, 3, 3]) // true
 * hasDuplicates(["one", "two", "three"]) // false
 * ```
 *
 * @public
 */
export declare function hasDuplicates<T extends keyof Primitive>(array: T[]): boolean;

/**
 * Returns the spilted lists grouped by index.
 * They key should be unique and for  ununique keys it would be replaced with the last key.
 * @param array - of objects.
 * @param key - unique key
 * @returns grouped by index, key value list.
 * @example
 * ```ts
 * indexBy([
 *  { id: 1, name: "A" },
 *  { id: 2, name: "B" },
 *  { id: 3, name: "C" },
 *  ], 'id')
 *  // result:
 *  // {
 *  //  "1": { id: 1, name: "A" },
 *  //  "2": { id: 2, name: "B" },
 *  //  "3": { id: 3, name: "C" },
 *  // }
 *  indexBy([
 *  { id: 1, name: "A" },
 *  { id: 1, name: "B" },
 *  { id: 3, name: "C" },
 *  ], 'id')
 *  // result:
 *  // {
 *  //  "1": { id: 1, name: "B" },
 *  //  "3": { id: 3, name: "C" },
 *  // }
 * ```
 * @public
 */
export declare function indexBy<T extends {
    [K in keyof T]: string | number | symbol;
}, K extends keyof T>(array: T[], key: K): Record<T[K], T>;

/**
 * Determines whether the input is an array or not.
 * @param value - Generic input.
 * @returns true if the input is an array or false otherwise.
 * @example
 * ```ts
 * isArray([{ id: 1 }, { id: 2 }]) // true
 * isArray(["one", "one"]) // true
 * isArray([{ id: 1 }, { id: 2 }]) // true
 * isArray('Is an array?') // false
 * ```
 * @public
 */
export declare function isArray<T>(value: unknown): value is Array<T>;

/**
 * Determines whether the input is array of string or not.
 * @param value - input
 * @returns true if the input is array, false otherwise.
 * @example
 * ```ts
 * isArrayOfString(["a", "b", "c"]) // true
 * isArrayOfString(["a", "b", 1])   // false
 * ```
 * @public
 */
export declare function isArrayOfString(value: unknown): value is string[];

/**
 * Determines whether the input is a Date type or not.
 * @param value - input.
 * @returns true if the input is a Date type, false otherwise.
 * @example
 * ```ts
 * isDate(new Date(2000, 1, 1)) // true
 * isDate('29 Feb 2020') // false
 * ```
 *
 * @public
 */
export declare function isDate(value: unknown): value is Date;

/**
 * Determines whether the input string is valid date or not.
 * @param value - input string.
 * @returns true if the input string is valid date, false otherwise.
 * @example
 * ```ts
 * isDateString('01/01/2000') // true
 * isDateString('31/09/2000') // false
 * ```
 * @remarks
 * While there are some regular expressions that allow date validations,
 * it is better to validate dates using special date and time libraries like momentjs.
 * RegEx is from: https://regex101.com/r/IuYz9V/1
 *
 * @public
 */
export declare function isDateValid(value: string): value is string;

/**
 * Determines whether the input is defined or not.
 * @param value - input
 * @returns true if the input is defined, false otherwise.
 * @example
 * ```ts
 * declare let val: string | undefined;
 * if (isDefined(val)) {
 *   // val is defined and safe to use.
 *   val.toLocaleLowerCase()
 * }
 * ```
 * @public
 */
export declare function isDefined<T>(value: T): value is NonNullable<T>;

/**
 * Determines whether an input is empty or not.
 * @param value - input.
 * @returns true if the input is empty, false otherwise.
 * @example
 * ```ts
 *  isEmpty([])     // true
 *  isEmpty({})     // true
 *  isEmpty("")     // true
 *  isEmpty(null)   // true
 *  isEmpty(true)   // true
 *  isEmpty(1)      // true
 *  isEmpty({id:1}) // false
 *  isEmpty([1])    // false
 *  isEmpty("1")    // false
 * ```
 * @public
 */
export declare function isEmpty<T>(value: T): value is T;

/* Excluded from this release type: isEqual */

/* Excluded from this release type: isEqualDate */

/**
 * Determines whether an input is a map or not.
 * @param value - input
 * @returns true if the input is a map, false otherwise.
 * @example
 * ```ts
 *  isMap(new Map<string, number>()) // true
 *  isMap({ id: 1 })                 // false
 *  isMap([1, 2, 3])                 // false
 * ```
 * @public
 */
export declare function isMap<T>(value: T): value is T;

/**
 * Determines whether an input is null or not.
 * @param value - input
 * @returns true if the input is null, false otherwise.
 * @example
 * ```ts
 * isNull(null)      // true
 * isNull(undefined) // false
 * isNull({})        // false
 * ```
 * @public
 */
export declare function isNull(value: unknown): value is null;

/**
 * Determines whether an input is number or not.
 * @param value - input
 * @returns true if the input is number, false otherwise.
 * @example
 * ```ts
 * isNumber(1)           // true
 * isNumber(NaN)         // false
 * isNumber(Infinity)    // false
 * isNumber("1")         // false
 * ```
 * @public
 */
export declare function isNumber(value: unknown): value is number;

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
export declare function isObject<T>(value: T): value is T & object;

/**
 * Determines whether the input is an object like or not.
 * When a value is object like, it is not null and `typeof` result is "object".
 * @param value - input.
 * @returns true when the input is an object like, or false when it is not.
 * @example
 * ```ts
 * isObjectLike({})         // true
 * isObjectLike([])         // true
 * isObjectLike(Function)   // false
 * isObjectLike(null)       // false
 * ```
 * @public
 */
export declare function isObjectLike<T>(value: T): value is T & object;

/**
 * Determines whether the input is `Set` or not.
 * @param value - input.
 * @returns true if the input is `Set`, false otherwise.
 * @example
 * ```ts
 * isSet(new Set()) // true
 * isSet([])        // false
 * ```
 * @public
 */
export declare function isSet<T>(value: T): value is T;

/**
 * Determines whether the input is string or not.
 * @param value - input
 * @returns true if the input is string, false otherwise.
 * @example
 * ```ts
 * isString("string") // true
 * isString('string') // true
 * isString(`string`) // true
 * isString(123)      // false
 * ```
 * @public
 */
export declare function isString(value: unknown): value is string;

/* Excluded from this release type: omitBy */

declare type PredicateFunction = (...args: any[]) => boolean;

declare type Primitive = string | number | boolean;

/* Excluded from this release type: toChunks */

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
export declare function wrapInArray<Type>(value: Type): Type[];

export { }
