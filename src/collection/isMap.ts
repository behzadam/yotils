function isMap(value: Required<any>): value is Map<any, any> {
  return value instanceof Map;
}

export default isMap;
