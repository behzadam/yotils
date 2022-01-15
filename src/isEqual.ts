import compareDate from "./utils/compareDate";
import isDate from "./utils/isDate";
import isDefined from "./utils/isDefined";
import isMap from "./utils/isMap";
import isObject from "./utils/isObject";
import isSet from "./utils/isSet";

function isEqual(target: Date, other: Date): boolean
function isEqual(target: boolean, other: boolean): boolean
function isEqual(target: string, other: string): boolean
function isEqual(target: string[], other: string[]): boolean
function isEqual(target: number[], other: number[]): boolean
function isEqual(target: boolean[], other: boolean[]): boolean
function isEqual(target: {}, other: {}): boolean
function isEqual(target: Map<any, any>, other: Map<any, any>): boolean
function isEqual(target: Set<any>, other: Set<any>): boolean

function isEqual(target: any, other: any): boolean {
  // primitive
  if (target === other)
    return true;

  if (isDate(target))
    return compareDate(target, other);

  if (isMap(target)) {
    if (target.size !== other.size) return false;
    for (let item of target.entries())
      if (!other.has(item[0])) return false;
    for (let item of target.entries())
      if (!isEqual(item[1], target.get(item[0]))) return false;
    return true;
  }

  if (isSet(target)) {
    if (target.size !== other.size) return false;
    for (let item of target.entries())
      if (!other.has(item[0])) return false;
    return true;
  }

  if (Array.isArray(target)) {
    if (target.length !== other.length) return false;
    let i: number = target.length;
    for (i; i-- !== 0;)
      if (!isEqual(target[i], other[i])) return false;
    return true;
  }

  // object
  if (!isObject(target) || !isObject(other)) return false;
  let keys = Object.keys(target);
  if (keys.length !== Object.keys(other).length) return false;
  return keys.every((k) => isEqual(target[k], other[k]));
}

export default isEqual;