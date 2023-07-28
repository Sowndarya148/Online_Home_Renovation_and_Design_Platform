// reducerB.js

const initialStateB = {
    // Initial state for this reducer's slice of the application state
    // You can set any default values here
    count: 0,
    isActive: false,
  };
  
  const reducerB = (state = initialStateB, action) => {
    switch (action.type) {
      case "INCREMENT_COUNT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "TOGGLE_ACTIVE":
        return {
          ...state,
          isActive: !state.isActive,
        };
      // Handle other action types if needed
      default:
        return state; // Return the current state if the action type is not recognized
    }
  };
  
  export default reducerB;
  