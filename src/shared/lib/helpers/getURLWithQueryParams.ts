import qs from 'qs';

export const getURLWithQueryParams = (url: string, queryParams?: Record<string, unknown>) => {
  const queryString = qs.stringify(queryParams, {
    skipNulls: true,
    arrayFormat: 'comma',
    encodeValuesOnly: true,
  });

  return queryString ? `${url}?${queryString}` : url;
};
