import { USER_SIGNIN, USER_SIGNOUT } from '../actions/Action';
import { State } from '@/models/state';
import { UserDTO } from '@/models/userDTO';

// type ActionType = {
//   type: string;
//   payload?: UserDTO;
// };

const storeReducer = (state: State, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return { ...state, userInfo: action.payload };
    case USER_SIGNOUT:
      return {
        ...state,
        userInfo: null,
      };

    default:
      return { ...state };
  }
};

export default storeReducer;
