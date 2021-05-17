import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './ContextProvider'
import { getTotal } from './reducer'

const Subtotal = () => {
    const [{cart}] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>Subtotal({cart.length} items ):<strong>{`${value}`}</strong></p>
                        <small className="subtotal__gift">
                            <input type= 'checkbox' /> This Order contains a gift.
                        </small>
                    </>

                )}
                decimalScale = {2}
                value = {getTotal(cart)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {'₹'}
            />
            <button >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
