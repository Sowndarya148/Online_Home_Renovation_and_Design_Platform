// reducerA.js

const initialStateA = {
    // Initial state for this reducer's slice of the application state
    // You can set any default values here
    data: [],
  };
  
  const reducerA = (state = initialStateA, action) => {
    switch (action.type) {
      case "UPDATE_DATA_A":
        return {
          ...state,
          data: action.payload, // Update the 'data' property with the payload from the action
        };
      // Handle other action types if needed
      default:
        return state; // Return the current state if the action type is not recognized
    }
  };
  
  export default reducerA;
  