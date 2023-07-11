import { isValidUrl } from './is-valid-url';

/**
 * Extracts domain name from a URL string.
 * @param url - the given url
 * @returns domain name string or null if url is not valid.
 */
export function getDomainWithoutWWW(url: string): string | null {
  if (isValidUrl(url)) {
    return new URL(url).hostname.replace(/^www\./, '');
  }
  return null;
}
