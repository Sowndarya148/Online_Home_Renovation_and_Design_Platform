// actions.js

export const setServices = (services) => {
  return {
    type: "SET_SERVICES_DATA", // Update the action type to match the reducer
    payload: services,
  };
};
