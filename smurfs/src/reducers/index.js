import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAIL
} from '../actions';

const initialState = {
  Smurfs: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        Smurfs: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      };
      case POST_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        Smurfs: action.payload,
        isFetching: false,
        error: ''
      };
    case POST_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
