import {CartItem} from '../components'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Cart(params) {
    const cart = useSelector(state => state.cart)
    const history = useHistory()

    return (
        <>
        <div className="grid grid-flow-col grid-cols-2 gap-4 mb-[10%]">
            <div className="w-[75%] ml-[14rem]">
                <div className="mb-[3.5rem]">
                    <p className="text-2xl text-gray-500 font-semibold tracking-wider">SHOPPING CART</p>
                </div>
                <div>
                    {
                        cart.length
                        ? cart.map((el) => (
                            <CartItem item={el} key={el.id} />
                        ))
                        : <div className="text-lg text-gray-500 tracking-wide mb-7">
                            You don't have any item in this cart
                        </div>
                    }
                </div>
                <button type="button" onClick={() => history.push('/kahf-shop')}> 
                    <div className="text-gray-400 text-xs mt-5 flex items-center">
                        <span class="material-icons" style={{"transform": "scaleX(-1)"}}>arrow_right_alt</span>
                        <p className="ml-2 font-semibold tracking-wide">Go Back Shopping</p>
                    </div>  
                </button>
            </div>
            <div></div>
        </div>
        </>
    )
}