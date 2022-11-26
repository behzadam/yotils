export function isSet(value: Required<any>): value is Set<any> {
  return value instanceof Set;
}
