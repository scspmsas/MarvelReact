import { MODIFY_PAGINATION_AP } from '../constants';

const INITIAL_STATE = { activePageList: { activePage: 1 } };


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case MODIFY_PAGINATION_AP:
            return { ...state, activePageList: { activePage: action.payload } };
        default:
            return state;
    }
}