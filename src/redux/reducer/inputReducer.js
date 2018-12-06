const Input = (state, action) => {
  if (action.type === "SET_VALUE") {
    return action.value;
  }
  return "";
};

export default Input;
