import { PredicateFunction, AnyObject } from './types';

/**
 * Omits by
 * @alpha
 */
export function omitBy(object: AnyObject, fun: PredicateFunction): AnyObject {
  return Object.keys(object)
    .filter((key) => !fun(key, object[key]))
    .reduce((acc, key) => ((acc[key] = object[key]), acc), {} as AnyObject);
}
