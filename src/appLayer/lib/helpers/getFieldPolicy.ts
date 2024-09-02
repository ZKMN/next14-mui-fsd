import { FieldPolicy, StoreValue } from '@apollo/client';

export const getFieldPolicy = <T extends Record<string, StoreValue>>(): FieldPolicy => ({
  keyArgs: false,
  merge(existing, incoming, { readField }) {
    const merged = { ...existing };

    incoming.forEach((item: T) => {
      const index = readField('id', item) as number;

      merged[index] = item;
    });

    return merged;
  },

  read(existing) {
    return existing && Object.values(existing);
  },
});
