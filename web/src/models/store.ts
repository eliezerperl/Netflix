import { Dispatch } from 'react';
import { UserDTO } from './userDTO';

export type Store = {
  state: {
    userInfo: UserDTO | null;
  };
  dispatch: Dispatch<ActionType>;
};

export type ActionType = {
  type: string;
  payload?: UserDTO;
};
