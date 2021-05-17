import React from 'react'
import './Checkout.css'
import { useStateValue } from './ContextProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


const Checkout = () => {

    const [{cart}] = useStateValue();
    return (
        <div className='checkout'>
            {
                cart?.length === 0 ? 
                (<h1>Cart is Empty</h1>) : 
                (
                    <div>
                        <h2 className='checkout__title'>Your Cart</h2>
                        {
                            cart.map((item)=>(
                                <CheckoutProduct 
                                id= {item.id}
                                title={item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating} />
                            ))
                        }
                    </div>
                )
            }
            {cart.length>0 && (
                <div className="checkout__right">
                   <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
