import Loading from './Loading'
import {addToCart} from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({product}) {
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const cart = useSelector(state => state.cart)

    const addToCartHandler = (e) => {
        setClicked(true)
        e.preventDefault()
        const input = {
            name: product.name,
            image: product.image
        }
        dispatch(addToCart(input))
        toast('Product successfuly added')
    }

    const checkItemFromCart = (name) => {
        const re = new RegExp(name, 'gi')
        return cart.find(el => el?.name.match(re))
    }

    return (
        <>
        <Toaster toastOptions={{
            duration: 2000,
            position: "bottom-center",
            style: {
                width: "20rem",
                marginBottom: '5rem',
                background: 'black',
                color: 'white',
                padding: '0.25rem'
            }
        }} />
        {
            product.id
            ?
            <div className="flex flex-col items-center mb-5 text-center relative h-[25.5rem]">
                <div className="w-[18rem] h-[18rem]">
                    <img src={product.image} alt="" />
                </div>
                <div className="text-xs mt-5 w-[17rem] font-semibold tracking-widest">
                    <p>{product.name}</p>
                </div>
                <div className="bg-black text-white text-xs rounded-md p-2.5 absolute bottom-0 hover:scale-110">
                    {
                        !checkItemFromCart(product.name)
                        ?
                        <button type="button" onClick={addToCartHandler} disabled={clicked}> 
                            {
                                !clicked
                                ?
                                <p className="font-semibold tracking-widest">ADD TO CART</p>
                                :
                                <p className="font-semibold tracking-widest">ADDING TO CART...</p>
                            }
                        </button>
                        :
                        <button type="button" onClick={() => history.push('/cart')}> 
                            <p className="font-semibold tracking-widest">VIEW CART</p>
                        </button>

                    }
                </div>
            </div>
            : <Loading/>
        }
        </>
    )
}