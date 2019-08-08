
import * as actionTypes from './actions'

const initialState = {users: [], currentPage: 0, totalPages: 0}

const reducer = (state = initialState, action) => {
    switch ( action.type ){
        case actionTypes.FETCH_USERS: 
            return{
                ...state,
                users: action.payload,
                totalPages:   Math.ceil(action.payload.length/5),
                currentPage: 1
            }
        case actionTypes.NEXT_PAGE: 
            const nextPage = ((state.currentPage + 1) > state.totalPages) ? state.currentPage : state.currentPage + 1
            return{
                ...state,
                currentPage: nextPage
            }
        case actionTypes.PREV_PAGE: 
             const prevPage = ((state.currentPage - 1) < 1) ? state.currentPage : state.currentPage - 1
            return{    
                ...state,            
                currentPage: prevPage
            }
        case actionTypes.CHANGE_PAGE:             
            return{
                ...state,                
                currentPage: action.payload
            }
        default: 
            return state
    }

} 

export default reducer