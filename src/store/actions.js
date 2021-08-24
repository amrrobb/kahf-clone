import {
    SET_PRODUCTS,
    SET_CART
} from './actionTypes'
import axios from 'axios'

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

export const addToCart = () => {
    return (dispatch, getState) => {
        (async () => {
            try {
                const {data} = await axios.post('https://paragon-training-api.herokuapp.com/cart')
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


