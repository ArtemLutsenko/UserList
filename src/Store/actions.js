import jsonUsers from '../apis/jsonUsers'

export const FETCH_USERS = 'FETCH_USERS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const CHANGE_PAGE = 'CHANGE_PAGE'


export const fetchUsers =  () =>{
    return async dispatch => {
        const response = await jsonUsers.get()
        dispatch({type: FETCH_USERS, payload: response.data.users})
    }            
}

export const nextPage =  () =>{
    return {
        type: NEXT_PAGE
    }
}

export const prevPage =  () =>{
    return {
        type: PREV_PAGE
    }
}

export const cahgePage =  (id) =>{
    return {
        type: CHANGE_PAGE,
        payload: id
    }
}