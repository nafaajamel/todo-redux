const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];

    case "REMOVE_TODO":
      return state.filter(x => x.id != action.id);

    default:
      return state;
  }
};

export default TodoReducer;
