const SET_QUERY = 'sf-movies/search/SET_QUERY';

const initialState = {
    limit: 10,
    page: 1,
    title: ''
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_QUERY:
            return {
                limit: action.query.limit,
                page: action.query.page,
                title: action.query.title
            };
        default: return state;
    }
}

export function setQuery(query) {
    return { type: SET_QUERY, query }
}
