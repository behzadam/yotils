export function getTag<T>(value: T): string {
  return Object.prototype.toString.call(value);
}
