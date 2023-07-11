/**
 * A valid URL (Uniform Resource Locator) in the web typically consists of several components:
 * 1. Protocol: This is the type of protocol used for communication, such as "http://" or "https://".
 * 2. Domain: This is the unique address of a website, like "example.com" or "google.com".
 * 3. Path: This is the specific location or file on the website, such as "/products" or "/about-us.html".
 * 4. Query Parameters: These are optional parameters that can be added to a URL to provide additional information to the website, like "?category=books".
 *
 *
 * @param url - the given url string
 * @returns true if the URL is valid, false otherwise.
 *
 * @public
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
