
let visibilityFilter = function (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_FILTER':
      console.log('user choose to filter todos');
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
