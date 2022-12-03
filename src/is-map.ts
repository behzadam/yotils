export function isMap<T>(value: T): value is T {
  return value instanceof Map;
}
