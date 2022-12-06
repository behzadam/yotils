export type Primitive = string | number | boolean;

export type Dictionary<T, K extends string | number | symbol = string> = {
  [key in K]?: T;
};

export type AnyObject = Record<keyof any, unknown>;

// export type PredicateFunction<T> = <K extends keyof T>(
//   key: K,
//   value: T[K]
// ) => boolean;

export type PredicateFunction = (...args: any[]) => boolean;
