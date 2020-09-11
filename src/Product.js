import React from 'react';
import './Product.css';

function Product({ title, img, price, rating }) {
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
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={img} alt=""></img>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
