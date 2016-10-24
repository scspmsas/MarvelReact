import { combineReducers } from 'redux';

import CharactersReducer from './Characters';
import PaginationReducer from './Pagination';

const rootReducer = combineReducers({ characters: CharactersReducer, pagination: PaginationReducer });

export default rootReducer;