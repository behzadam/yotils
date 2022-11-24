/**
 * Compares two given date type values.
 * @param target - Date
 * @param other - Date
 * @returns true if target.getTime() equals other.getTime()
 * @remarks Date.prototype.getTime() returns number of milliseconds.
 * @beta
 */
export function isEqualDate(
  target: Required<Date>,
  other: Required<Date>
): boolean {
  return target.getTime() === other.getTime();
}
