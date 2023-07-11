import { getQueryString } from './get-query-string';

describe('isValidUrl', () => {
  type FakeNextRouter = {
    query: { [key: string]: string | string[] | undefined };
  };

  it('returns comma separated string', () => {
    const router: FakeNextRouter = {
      query: {
        key1: 'value1',
        key2: 'value2',
        key3: ['value3', 'value4'],
      },
    };

    expect(getQueryString(router.query)).toBe(
      '?key1=value1&key2=value2&key3=value3%2Cvalue4',
    );
  });

  it('returns an empty string on empty object', () => {
    const router: FakeNextRouter = {
      query: {},
    };

    expect(getQueryString(router.query)).toBe('');
  });
});
