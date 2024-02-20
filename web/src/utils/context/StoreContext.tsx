import { createContext, useContext, useReducer } from '@/utils/imports';
import React from 'react';
import storeReducer from '../reducers/storeReducer';
import { Store } from '@/models/store';

const user = localStorage.getItem('userInfo');
const myList = localStorage.getItem('myList');

const initialState: Store = {
  state: {
    userInfo: user ? JSON.parse(user) : null,
    myList: myList ? JSON.parse(myList) : [],
  },
  dispatch: () => ({ type: '', payload: null }),
};

const StoreContext = createContext<Store>(initialState);

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
