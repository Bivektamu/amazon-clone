import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, img, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();



    const addToBasket = () => {
        // dispath the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                rating: rating,
            }
        })


    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <b>{price}</b>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><span role="img">⭐</span> </p>
                    ))}
                </div>
            </div>

            <img src={img} alt=""></img>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
