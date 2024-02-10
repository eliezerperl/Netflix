import { createContext, useContext, useReducer } from '@/utils/imports';
import React from 'react';
import storeReducer from '../reducers/storeReducer';
import { State } from '@/models/state';
import { UserDTO } from '@/models/userDTO';

const user = localStorage.getItem('userInfo');

const initialState = {
  userInfo: user ? JSON.parse(user) : null,
};

// type StoreContextValue = {
//   state: State;
//   dispatch: React.Dispatch<  {type: string;
//   payload?: UserDTO}>; 
// };

const StoreContext = createContext(initialState);

type Props = {
  children: React.ReactNode;
};
export const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const body = { ...state, dispatch };

  return <StoreContext.Provider value={body}>{children}</StoreContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStoreContext = () => useContext(StoreContext);
