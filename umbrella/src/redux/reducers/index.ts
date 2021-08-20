import { AnyAction } from 'redux'
import { FETCH_FORECAST } from '../actionTypes'
import  initialState  from '../store'

const Reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case FETCH_FORECAST:
            return {
                ...state, 
                state: action.payload
            }

        
        default:
            return state
    }
}

export default Reducer