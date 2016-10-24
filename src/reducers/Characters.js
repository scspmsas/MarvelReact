import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from '../constants';

const INITIAL_STATE = { charactersList: { characters: [], pageNum: 0, error: null, loading: false } };


export default function (state = INITIAL_STATE, action) {
  let error, pageNum;
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, charactersList: { characters: [], pageNum: 0, error: null, loading: true } };
    case FETCH_CHARACTERS_SUCCESS:
      pageNum = Math.ceil(action.payload.data.data.total / 100) - 1;
      return { ...state, charactersList: { characters: action.payload.data.data.results, pageNum: pageNum, error: null, loading: false } };
    case FETCH_CHARACTERS_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return { ...state, charactersList: { characters: [], pageNum: 0, error: error, loading: false } };
    default:
      return state;
  }
}