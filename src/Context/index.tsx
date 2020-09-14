import React, { useReducer } from 'react';
import { toggleReducer } from '../reducers/toggle';
import { ToggleEvent } from '../reducers/types';

interface Props {
  children: React.ReactElement
}

const initialState: ToggleEvent = {
  active: false,
};

const AppContext = React.createContext(initialState);

function AppProvider(props: Props) {
  const { children } = props;
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
export { AppContext, AppProvider };
