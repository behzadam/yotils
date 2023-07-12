/**
 * Returns key/value pairs of the given url with params.
 * Also, check out this {@link https://github.com/steven-tey/dub/blob/main/lib/utils.ts#L330C20 | link}.
 *
 * @param url - the given url
 * @returns key/value pairs of param and value, or an empty object
 * @example
 * ```ts
 * const params = getParamsFromURL('https://example.org/?a=1&b=2&c=3')
 * // { a: '1', b: '2', c: '3' }
 * ```
 *
 * @public
 */
export function getParamsFromURL(url: string): Record<string, string> {
  if (!url) return {};
  try {
    const params = new URL(url).searchParams;
    const paramsObj: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
      if (value && value !== '') {
        paramsObj[key] = value;
      }
    }
    return paramsObj;
  } catch (e) {
    return {};
  }
}
