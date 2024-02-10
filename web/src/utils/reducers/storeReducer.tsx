import { USER_SIGNIN, USER_SIGNOUT } from '../actions/Actions';
import { ActionType, Store } from '@/models/store';

const storeReducer = (state: Store, action: ActionType): Store => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        state: { userInfo: action.payload || state.state.userInfo },
      };
    case USER_SIGNOUT:
      return {
        ...state,
        state: { userInfo: null },
      };

    default:
      return { ...state };
  }
};

export default storeReducer;
