function areEqual<T extends string | number | boolean>(arr: Required<T[]>): boolean {
  return arr.every(item => item === arr[0]);
}

export default areEqual;