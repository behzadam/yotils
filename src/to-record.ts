/**
 * Generates key value list from an array of objects
 * @param array
 * @param key
 * @returns record
 */
function toRecord<T extends { [K in keyof T]: any }, K extends keyof T>(
  array: Array<T>,
  key: K
): Record<K, T> {
  return array.reduce((record, current) => {
    record[current[key]] = current;
    return record;
  }, {} as Record<K, T>);
}

export default toRecord;
