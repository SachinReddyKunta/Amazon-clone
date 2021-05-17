import React from 'react'
import { useStateValue } from './ContextProvider'
import './Product.css'

const Product = ({id,title,image,price,rating}) => {

    const [{cart},dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_CART',
            item : {
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <h4>{title}</h4>
                <p className="product__price">
                    <span>₹</span>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_)=>(
                            <p>&#11088;</p>
                        ))
                    }
                </div>
            
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to cart</button> 
           
        </div>
    )
}

export default Product
