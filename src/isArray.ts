function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

export default isArray;
