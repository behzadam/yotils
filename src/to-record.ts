export function toRecord<
  T extends { [K in keyof T]: string | number | symbol },
  K extends keyof T
>(array: T[], key: K): Record<T[K], T> {
  return array.reduce(
    (acc, item) => ({ ...acc, [item[key]]: item }),
    {} as Record<T[K], T>
  );
}
