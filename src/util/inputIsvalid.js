export const isGreaterThanOrEqualToOne = (number) => {
  return number >= 1;
};

export const inputIsValid = (object, property, condition) => {
  return condition(object[property]);
};
