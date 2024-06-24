const commonVars = {
  email: '',
  storageKeyName: '',
  keys: {
    gAPI: '',
  },
  urls: {
    API: process.env.NEXT_PUBLIC_API_URL, // process.env.APP_ENV,
    site: '',
    imgCDN: process.env.NEXT_PUBLIC_API_URL,
  },
};

export const config = {
  test: commonVars,
  production: {
    ...commonVars,
    urls: {
      ...commonVars.urls,
      site: '',
    },
  },
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'] as typeof commonVars;
