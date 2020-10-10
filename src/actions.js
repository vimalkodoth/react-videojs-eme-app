export const LOAD_DATA = 'LOAD_DATA';

export function setSearchTerm(searchTerm) {
    return {type: LOAD_DATA, payload: searchTerm}


}