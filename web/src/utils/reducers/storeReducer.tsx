import {
  ADDED_TO_LIST,
  REFRESH_TOKEN,
  REMOVED_FROM_LIST,
  USER_SIGNIN,
  USER_SIGNOUT,
} from '../actions/Actions';
import { ActionType, State } from '@/models/store';

const storeReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case USER_SIGNIN:
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        ...state,
        userInfo: action.payload || state.userInfo,
      };
    case USER_SIGNOUT:
      localStorage.removeItem('userInfo');
      return {
        ...state,
        userInfo: null,
      };

    case ADDED_TO_LIST || REMOVED_FROM_LIST:
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        ...state,
        userInfo: action.payload || state.userInfo,
      };

    case 'TOKEN_TEST':
      return {
        ...state,
        userInfo: action.payload!,
      };

    case REFRESH_TOKEN:
      if (action.payload) {
        return {
          ...state,
          userInfo: action.payload,
        };
      }
      return { ...state };

    default:
      return { ...state };
  }
};

export default storeReducer;
