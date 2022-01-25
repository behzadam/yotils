function isDate(value: any): value is Date {
  return value instanceof Date;
}

export default isDate;
