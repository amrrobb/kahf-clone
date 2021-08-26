import {
    SET_PRODUCTS,
    SET_CART,
    SET_REGISTER_USER,
    SET_LOGIN_USER
} from './actionTypes'


// Initial State
const initialState = {
    products: [],
    cart: [],
    isLoggedIn: false,
    users: [
        {
            "id": 1,
            "name": "admin",
            "email": "admin@mail.com",
            "password": "12345678"
        }
    ]
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
        
        case SET_REGISTER_USER:
            const {payload} = action
            const newUser = [...state.users]
            newUser.push(payload)
            return{
                ...state,
                users: newUser  
            }

        case SET_LOGIN_USER:
            return {
                ...state,
                isLoggedIn: action.payload
            }
            
        default:
            return state
    }
}

export default reducer