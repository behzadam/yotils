/**
 * Determines whether the input string is valid date or not.
 * @param input - input string.
 * @returns true if the input string is valid date, false otherwise.
 * @example
 * ```ts
 * isStringDate('01/01/2000') // true
 * isStringDate('31/09/2000') // false
 * ```
 * @remarks
 * While there are some regular expressions that allow date validations,
 * it is better to validate dates using special date and time libraries like momentjs.
 * RegEx is from: https://regex101.com/r/IuYz9V/1
 *
 * @public
 */
export function isStringDate(input: string): input is string {
  const regexp =
    /(^(?:(?:(?:31(?:(?:([-.\/])(?:0?[13578]|1[02])\2)|(?:([-.\/ ])(?:Jan|JAN|Mar|MAR|May|MAY|Jul|JUL|Aug|AUG|Oct|OCT|Dec|DEC)\3)))|(?:(?:29|30)(?:(?:([-.\/])(?:0?[13-9]|1[0-2])\4)|(?:([-.\/ ])(?:Jan|JAN|Mar|MAR|Apr|APR|May|MAY|Jun|JUN|Jul|JUL|Aug|AUG|Sep|SEP|Oct|OCT|Nov|NOV|Dec|DEC)\5))))(?:(?:1[6-9]|[2-9]\d)?\d{2}))$|^(?:29(?:(?:([-.\/])(?:0?2)\6)|(?:([-.\/ ])(?:Feb|FEB)\7))(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))$|^(?:(?:0?[1-9]|1\d|2[0-8])(?:(?:([-.\/])(?:(?:0?[1-9]|(?:1[0-2])))\8)|(?:([-.\/ ])(?:Jan|JAN|Feb|FEB|Mar|MAR|May|MAY|Jul|JUL|Aug|AUG|Oct|OCT|Dec|DEC)\9))(?:(?:1[6-9]|[2-9]\d)?\d{2}))$)/gm;
  return regexp.test(input);
}
