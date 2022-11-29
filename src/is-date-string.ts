export function isDateString(value: string): value is string {
  return !Number.isNaN(new Date(value).valueOf());
}
