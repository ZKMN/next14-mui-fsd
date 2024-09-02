import { ApolloError } from '@apollo/client';

import { IBroccoliError } from '@/shared/types';

export const getParsedError = (err?: ApolloError | null) => {
  const [graphError] = err?.graphQLErrors || [];

  if (graphError?.extensions) {
    const error = graphError.extensions.BroccoliError as IBroccoliError;

    return { message: error?.defaultMessage, code: error?.errorCode };
  }

  return { message: graphError?.message || 'Undefined server error!' };
};
