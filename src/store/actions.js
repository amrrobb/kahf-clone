import {
    SET_PRODUCTS,
    SET_CART,
    SET_REGISTER_USER,
    SET_LOGIN_USER
} from './actionTypes'
import axios from 'axios'
import toast from 'react-hot-toast'

export const setProducts = (input) => {
    return {
        type: SET_PRODUCTS,
        payload: input
    }
}

export const setCart = (input) => {
    return {
        type: SET_CART,
        payload: input
    }
}

export const fetchProducts = () => {
    return (dispatch, getState) => {
        (async () => {
            try {
                const {data} = await axios.get('https://paragon-training-api.herokuapp.com/products')
                dispatch(setProducts(data))
                
            } catch (err) {
                console.log(err);
            }
        }) ()
    }
}

export const fetchCart = () => {
    return (dispatch, getState) => {
        (async () => {
            try {
                const {data} = await axios.get('https://paragon-training-api.herokuapp.com/cart')
                dispatch(setCart(data))
                
            } catch (err) {
                console.log(err);
            }
        }) ()
    }
}

export const addToCart = (input) => {
    return (dispatch, getState) => {
        (async () => {
            try {
                const {data} = await axios.post('https://paragon-training-api.herokuapp.com/cart', input)
                console.log(data);
                dispatch(fetchCart())
                       
            } catch (err) {
                console.log(err);
            }
        }) ()
    }
}

export const deleteFromCart = (input) => {
    return (dispatch, getState) => {
        (async () => {
            try {
                const {id} = input
                await axios.delete(`https://paragon-training-api.herokuapp.com/cart/${id}`)
                console.log(input);
                dispatch(fetchCart())        
            } catch (err) {
                console.log(err);
            }
        }) ()
    }
}

export const registerUser = (input) => {
    return (dispatch, getState) => {
        const {users: data} = {...getState()}
        const found = data.find(({email}) => email === input.email)
        if (found) {
            toast('This email is already in use')
            return false
        } else {
            const newInput = {
                ...input,
                id: data[data.length-1].id+1
            }

            dispatch(setRegisterUser(newInput))
            toast('Register account success')
            return true
        }
    }
}

export const setRegisterUser = (input) => {
    return {
        type: SET_REGISTER_USER,
        payload: input
    }
}

export const loginUser = (input) => {
    return (dispatch, getState) => {
        const {users: data} = {...getState()}
        const found = data.find(({email, password}) => email === input.email && password === input.password)
        if (found) {
            toast('Login account success')
            localStorage.account = input.email
            dispatch(loginStatus(true))
            return true
        } else {
            toast('Invalid email/password')
            return false
        }
    }
}

export const logoutUser = () => {
    return (dispatch, getState) => {
        localStorage.clear()
        toast('Logout account success', {
            id: 'logout-toast'
        })
        dispatch(loginStatus(false))
    }
}

export const loginStatus = (input) => {
    return {
        type: SET_LOGIN_USER,
        payload: input
    }
}

