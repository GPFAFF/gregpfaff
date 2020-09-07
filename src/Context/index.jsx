import React, { useReducer } from 'react';
import { toggleReducer } from '../reducers/toggle';

const initialState = {
  active: false,
};

const AppContext = React.createContext(initialState);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
export { AppContext, AppProvider };
