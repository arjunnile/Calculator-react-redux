export const additionNumber = number => {
  return {
    type: "ADDITION",
    payload: number
  };
};

export const substractionNumber = number => {
  return {
    type: "SUBSTRACTION",
    payload: number
  };
};

export const multiplyNumber = number => {
  return {
    type: "MULTIPLY",
    payload: number
  };
};

export const devideNumber = number => {
  return {
    type: "DEVIDE",
    payload: number
  };
};
