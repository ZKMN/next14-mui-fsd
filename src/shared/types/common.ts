export enum ELocales {
  EN = 'en'
}

export enum ELanguages {
  EN = 'en-US'
}

export const LanguageToLocaleMap: { [key in ELocales]: ELanguages } = {
  [ELocales.EN]: ELanguages.EN,
};

export type TNamespaces = 'links';
