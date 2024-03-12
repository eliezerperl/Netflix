import { LoadingActionType, LoadingState } from '@/models/store';
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from '../actions/Actions';

const fetchReducer = (
  state: LoadingState,
  action: LoadingActionType
): LoadingState => {
  switch (action.type) {
    case GET_REQUEST:
      return { ...state, loading: true };
    case GET_SUCCESS:
      return { ...state, loading: false };

    case GET_FAIL:
      if (typeof action.payload === 'string')
        return { ...state, loading: false, error: action.payload };
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};

export default fetchReducer;
