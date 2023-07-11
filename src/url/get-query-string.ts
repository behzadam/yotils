/**
 * Returns comma separated list of query object.
 * This is useful when you use Next.js Router.
 * Also, checkout this {@link https://github.com/steven-tey/dub/blob/main/lib/utils.ts#L290 | link}.
 *
 * @param query - the given query key value pairs
 * @param options - optional extra key value pairs
 * @returns string like: ?q=value&s=item or empty string ''
 *
 * @example
 * ```ts
 * import { useRouter } from "next/router";
 * const router = useRouter();
 * const query = getQueryString(router.query)
 * ```
 *
 * @public
 */
export function getQueryString(
  query: { [key: string]: string | string[] | undefined },
  options?: Record<string, string>,
): string {
  const queryString = new URLSearchParams({
    ...(query as Record<string, string>),
    ...options,
  }).toString();
  return `${queryString ? '?' : ''}${queryString}`;
}
