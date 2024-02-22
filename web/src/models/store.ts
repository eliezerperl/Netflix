import { Dispatch } from 'react';
import { UserDTO } from './userDTO';
import { Content } from './content';

export type Store = {
  state: {
    userInfo: UserDTO | null;
    myList: Content[];
  };
  dispatch: Dispatch<ActionType>;
};

export type ActionType = {
  type: string;
  payload?: UserDTO;
};
