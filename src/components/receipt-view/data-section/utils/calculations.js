// Data
import foodData from '../../../../../content/food-data.json';

const IMPACT_TYPES = ['land', 'water', 'eutro', 'ghg'];

const round = (number) => {
  const place = 100;
  return Math.round(place * number) / place;
};

const GRADING_SCALE_MAXIMA = {
  F: 0,
  D: 51,
  C: 80,
  B: 94,
  A: 99,
};

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
    (item) => foodData[item].ecoScore.points * getItemKilos(item, cart[item]),
  );
  return round(impactValues.reduce((acc, curr) => acc + curr));
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

export const getUsageImpact = (cart, type, rescaled) => {
  const weightedOrRescaled = rescaled ? 'rescaled' : 'weighted';
  const cartItems = getCartItems(cart);
  const cartItemWeights = cartItems.map(
    (item) => foodData[item][weightedOrRescaled][type] * 1,
  );
  const totalWeight = cartItemWeights.reduce((acc, curr) => acc + curr);
  return round(totalWeight);
};

export const getSpecializedImpactValue = (cart) => {
  const weightedScores = IMPACT_TYPES.map((type) => getUsageImpact(cart, type));
  const unroundedValue = weightedScores.reduce((acc, curr) => acc + curr);
  return round(unroundedValue);
};

export const getMaximum = (cart) => {
  const max = IMPACT_TYPES.reduce((acc, curr) => {
    const impact = getUsageImpact(cart, curr, true);
    return impact > acc ? impact : acc;
  }, 0);

  return max;
};

export const getGrade = (cart) => {
  const totalImpact = getTotalImpactGrade(cart);

  const reducer = (acc, curr) => {
    const gradeStart = GRADING_SCALE_MAXIMA[curr];
    return totalImpact >= gradeStart ? curr : acc;
  };

  return Object.keys(GRADING_SCALE_MAXIMA).reduce(reducer);
};