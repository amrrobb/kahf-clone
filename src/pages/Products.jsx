import {ProductCard} from '../components'
import {fetchProducts} from '../store/actions'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

export default function Products(params) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <>
        <div className="px-[13rem]">
            <div className="grid grid-cols-4 gap-3">
                {
                    products.length
                    ? products.map((el) => (
                        <ProductCard product={el} key={el.id} />
                    ))
                    : null
                }
            </div>
        </div>

        </>
    )
}