const initialState = 0;

const calculatorEvent = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITION":
      return `${action.payload} +`;
    case "SUBSTRACTION":
      return `${action.payload} -`;
    case "MULTIPLY":
      return `${action.payload} *`;
    case "DEVIDE":
      return `${action.payload} /`;
    default:
      return state;
  }
};

export default calculatorEvent;
