import {
  ADDED_TO_LIST,
  REFRESH_TOKEN,
  REMOVED_FROM_LIST,
  USER_SIGNIN,
  USER_SIGNOUT,
} from '../actions/Actions';
import { ActionType, Store } from '@/models/store';

const storeReducer = (state: Store, action: ActionType): Store => {
  switch (action.type) {
    case USER_SIGNIN:
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        ...state,
        state: {
          userInfo: action.payload || state.state.userInfo,
        },
      };
    case USER_SIGNOUT:
      localStorage.removeItem('userInfo');
      return {
        ...state,
        state: { userInfo: null },
      };

    case ADDED_TO_LIST || REMOVED_FROM_LIST:
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        ...state,
        state: {
          userInfo: action.payload || state.state.userInfo,
        },
      };

    case 'TOKEN_TEST':
      return {
        ...state,
        state: { userInfo: action.payload! },
      };

    case REFRESH_TOKEN:
      if (action.payload) {
        return {
          ...state,
          state: { userInfo: action.payload },
        };
      }
      return { ...state };

    default:
      return { ...state };
  }
};

export default storeReducer;
