function compareDate(target: Required<Date>, other: Required<Date>): boolean { 
  return target.getTime() === other.getTime()
}

export default compareDate;