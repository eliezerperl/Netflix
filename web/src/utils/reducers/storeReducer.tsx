import {
  REFRESH_TOKEN,
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
          myList: state.state.myList,
        },
      };
    case USER_SIGNOUT:
      localStorage.removeItem('userInfo');
      localStorage.removeItem('myList');
      return {
        ...state,
        state: { userInfo: null, myList: [] },
      };

    case 'TOKEN_TEST':
      return {
        ...state,
        state: { userInfo: action.payload!, myList: [] },
      };

    case REFRESH_TOKEN:
      if (action.payload) {
        return {
          ...state,
          state: { userInfo: action.payload, myList: state.state.myList },
        };
      }
      return { ...state };

    default:
      return { ...state };
  }
};

export default storeReducer;
