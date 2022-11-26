function isDateValid(value: string): value is string {
  return !Number.isNaN(new Date(value).valueOf());
}

export default isDateValid;
