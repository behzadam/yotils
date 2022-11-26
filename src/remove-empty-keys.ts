export function removeEmptyKeys(input: Record<any, any>): Record<any, any> {
  return Object.keys(input)
    .filter((key) => input[key] !== "")
    .reduce((result, key) => {
      return {
        ...result,
        [key]: input[key],
      };
    }, {});
}
