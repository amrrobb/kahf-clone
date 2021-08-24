import {
    SET_PRODUCTS,
    SET_CART,
} from './actionTypes'


// Initial State
const initialState = {
    products: [],
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case SET_CART:
            return {
                ...state,
                cart: action.payload
            }
            
        default:
            return state
    }
}

export default reducer