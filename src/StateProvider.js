// set up data layer
// Track basket items
import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const StateContext = createContext();

// Build a Provider

export const StateProvider = ({ reducer, initialState, children }) => (
<StateContext.Provider value={useReducer(reducer, initialState)}>
  {children}
</StateContext.Provider>
);

// Export reduced state to StateProvider children(app components)
export const useStateValue = () => useContext(StateContext);
