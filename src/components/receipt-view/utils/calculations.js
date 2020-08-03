// Data
import foodData from '../../../../content/food-data.json';

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

/**
 * Gets all items in cart with quantity > 0

 * @param {Object<string, number>} cart
 *
 * @return {String[]} All cart items
 */
export const getCartItems = (cart) => {
  const keys = Object.keys(cart);
  return keys.filter((item) => cart[item]);
};

/**
 * Calculates number of kilos in a cart item
 *
 * @param {string} item
 * @param {number} qty Item quantity in cart
 *
 * @return {number} total kilos
 */
export const getItemKilos = (item, qty) => {
  const kilosPerQty = foodData[item].other.servingKilo;
  return kilosPerQty * qty;
};

/**
 * Calculates total 0-100 grade for cart
 *
 * @see getCartItems
 *
 * @param {Object<string, number>} cart
 *
 * @return {number} 0-100 grade
 */
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

  const value = itemVals.reduce((acc, curr) => acc + curr, 0);

  return Math.floor(value);
};

export const getUsageImpact = (cart, type, rescaled) => {
  const weightedOrRescaled = rescaled ? 'rescaled' : 'weighted';
  const cartItems = getCartItems(cart);
  const cartItemWeights = cartItems.map(
    (item) => foodData[item][weightedOrRescaled][type] * 1,
  );
  const totalWeight = cartItemWeights.reduce((acc, curr) => acc + curr, 0);
  return round(totalWeight);
};

export const getSpecializedImpactValue = (cart) => {
  const weightedScores = IMPACT_TYPES.map((type) => getUsageImpact(cart, type));
  const unroundedValue = weightedScores.reduce((acc, curr) => acc + curr);
  return round(unroundedValue);
};

/**
 * Calculates letter grade for cart
 *
 * @see getTotalImpactGrade
 *
 * @param {Object<string, number>} cart
 *
 * @return {string} Letter grade
 */
export const getGrade = (cart) => {
  const totalImpact = getTotalImpactGrade(cart);

  const reducer = (acc, curr) => {
    const gradeStart = GRADING_SCALE_MAXIMA[curr];
    return totalImpact >= gradeStart ? curr : acc;
  };

  return Object.keys(GRADING_SCALE_MAXIMA).reduce(reducer);
};

/**
 * Returns all high impact items in cart
 *
 * @see getCartItems
 *
 * @param {Object<string, number>} cart
 *
 * @return {String[]} Array of high impact items
 */
export const getHighImpactItems = (cart) => {
  const items = getCartItems(cart);
  const highImpactGrades = ['D', 'F'];
  const highImpactItems = items.filter((item) => {
    const { grade } = foodData[item].ecoScore;
    return highImpactGrades.includes(grade);
  });
  return highImpactItems;
};

/**
 * Gets lower-impact alternatives for items
 *
 * @see getCartItems
 *
 * @param {String[]} items
 *
 * @return {Object<string,String[]>}
 */
export const getAlternatives = (items) => {
  const reducer = (obj, item) => {
    const alts = foodData[item].other.alternatives || [];

    return { ...obj, [item]: alts };
  };

  return items.reduce(reducer, {});
};
