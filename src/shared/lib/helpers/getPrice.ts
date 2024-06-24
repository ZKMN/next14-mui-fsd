export const getPrice = (price?: number | string) => {
  if (price || price === 0) {
    const value = Number(price);

    const currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return currency.format(value);
  }

  return '';
};
