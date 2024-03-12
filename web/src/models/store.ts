import { Dispatch } from 'react';
import { UserDTO } from './userDTO';

export type Store = {
  state: State;
  dispatch: Dispatch<ActionType>;
};

export type State = {
  userInfo: UserDTO | null;
};

export type ActionType = {
  type: string;
  payload?: UserDTO;
};

export type LoadingState = {
  loading: boolean;
  error: string | null;
};

export type LoadingActionType = {
  type: string;
  payload?: string | null;
};
