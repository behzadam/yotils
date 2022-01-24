function isDateValid(date: string): boolean {
  return !Number.isNaN(new Date(date).valueOf());
}

export default isDateValid