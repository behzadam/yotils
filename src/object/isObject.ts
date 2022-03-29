function isObject(value: any): value is object {
  return typeof value === "object";
}

export default isObject;
