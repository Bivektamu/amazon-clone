import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
const CheckoutProduct = ({ id, img, title, price, rating, hideButton }) => {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

    }
    return (
        <div className='checkoutProduct'>
            <img src={img} alt="" className="checkoutProduct__img" />
            <div className='checkoutProduct__info'>
                <p className="checkoutProduct__title">{title}</p>
                <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><span role="img">⭐</span> </p>
                    ))}
                </div>

                {!hideButton && <button onClick={removeFromBasket}>Remove from basket</button>}

            </div>
        </div>
    )
}

export default CheckoutProduct
