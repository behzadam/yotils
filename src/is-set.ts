function isSet(value: Required<any>): value is Set<any> {
  return value instanceof Set;
}

export default isSet;
