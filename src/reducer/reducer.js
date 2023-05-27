const initialState = {
    user: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  