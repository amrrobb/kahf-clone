import {CartItem} from '../components'
import {fetchCart} from '../store/actions'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

export default function Cart(params) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    return (
        <>
        <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div>
                <div>
                    <p>SHOPPING CART</p>
                </div>
                <div>
                    {
                        cart.length
                        ? cart.map((el) => (
                            <CartItem item={el} key={el.id} />
                        ))
                        : null
                    }
                </div>
            </div>
            <div></div>
        </div>
        </>
    )
}