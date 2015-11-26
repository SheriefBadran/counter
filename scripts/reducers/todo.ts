let todo = function (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      let newState = Object.assign({}, state, {completed: !state.completed});
      return newState;
    default:
      return state;
  }
};

let todos = function (state = [], action) {
  const newState = Object.assign([], state);
  switch (action.type) {
    case 'ADD_TODO':
      newState.push({
        id: action.id++,
        text: action.text,
        completed: false
      });
      console.log(newState);
      return newState;
    case 'TOGGLE_TODO':
      return state.map(t =>todo(t, action));
    default:
      return state;
  }
};

export default todos;
