export function isObject<T>(value: T): value is T & object {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
