// Data
import foodData from '../../../../../content/food-data.json';

const impactTypes = ['land', 'water', 'eutro', 'ghg'];

const round = (number) => Math.round(1000 * number) / 1000;

export const getCartItems = (cart) => {
  const keys = Object.keys(cart);
  return keys.filter((item) => cart[item]);
};

export const getItemKilos = (item, qty) => {
  const kilosPerQty = foodData[item].other.servingKilo;
  return kilosPerQty * qty;
};

export const getStandardizedImpactValue = (cart) => {
  const cartItems = getCartItems(cart);
  const impactValues = cartItems.map(
    // TODO: decouple?
    (item) => foodData[item].ecoScore.points * cart[item],
  );
  return impactValues.reduce((acc, curr) => acc + curr);
};

export const getTotalImpactGrade = (cart) => {
  const cartItems = getCartItems(cart);
  const totalKilos = cartItems.reduce(
    (accumulator, item) => accumulator + getItemKilos(item, cart[item]),
    0,
  );

  const itemVals = cartItems.map((item) => {
    const kilos = getItemKilos(item, cart[item]);
    const grade = foodData[item].ecoScore.points; // TODO: decouple?
    return (kilos / totalKilos) * grade;
  });

  const value = itemVals.reduce((acc, curr) => acc + curr);

  return Math.floor(value);
};

export const getUsageImpact = (cart, type) => {
  const cartItems = getCartItems(cart);
  const cartItemWeights = cartItems.map(
    (item) => foodData[item].weighted[type] * 1,
  );
  const totalWeight = cartItemWeights.reduce((acc, curr) => acc + curr);
  return round(totalWeight);
};

export const getSpecializedImpactValue = (cart) => {
  const weightedScores = impactTypes.map((type) => getUsageImpact(cart, type));
  const unroundedValue = weightedScores.reduce((acc, curr) => acc + curr);
  return round(unroundedValue);
};
