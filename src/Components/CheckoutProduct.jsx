import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './ContextProvider'

const CheckoutProduct = ({id,title,price,rating,image}) => {

    price = Number(price)
    const [{cart},dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type : 'REMOVE_FROM_CART',
            id : id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt = "" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>

                <p className="checkoutProduct__price">
                    <span>₹</span>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_)=>(
                            <p>&#11088;</p>
                        ))
                    }
                </div>

                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
