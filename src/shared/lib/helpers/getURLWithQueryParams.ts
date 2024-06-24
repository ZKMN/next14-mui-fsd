import queryString, { StringifiableRecord } from 'query-string';

export const getURLWithQueryParams = (url: string, queryParams?: StringifiableRecord) => queryString.stringifyUrl({
  url,
  query: queryParams,
}, {
  skipNull: true,
  skipEmptyString: true,
  arrayFormat: 'comma',
});
