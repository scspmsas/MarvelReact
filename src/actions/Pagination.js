import { MODIFY_PAGINATION_AP } from '../constants';

export function modifyPaginationActivePage(pagination) {
    return {
        type: MODIFY_PAGINATION_AP,
        payload: pagination
    }
}