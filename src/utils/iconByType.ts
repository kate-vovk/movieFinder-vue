export const getIconByType = (type: string): string | null => {
  switch (type) {
    case 'cart':
      return '../assets/shopping_cart_black_24dp.svg';
    default:
      return null;
  }
};
