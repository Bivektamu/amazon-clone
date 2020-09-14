import React from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

import moment from 'moment';



function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>
                {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
            </p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(order => (
                <CheckoutProduct
                    id={order.id}
                    title={order.title}
                    img={order.img}
                    price={order.price}
                    rating={order.rating}
                    hideButton
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className='order__total'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />

        </div>
    )
}

export default Order;
