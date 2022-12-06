export type Primitive = string | number | boolean;

export type Dictionary<T, K extends string | number | symbol = string> = {
  [key in K]?: T;
};

export type PredicateFunction = (...args: any[]) => boolean;
