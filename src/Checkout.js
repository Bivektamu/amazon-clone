import React from 'react';
import './Checkout.css';
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h3>Hello, {user ? user.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {basket?.map(item => {
                        const { id, title, img, price, rating } = item;


                        return <>
                            <CheckoutProduct
                                id={id}
                                title={title}
                                img={img}
                                price={price}
                                rating={rating}
                            />

                        </>;


                    }
                    )}
                    {/* basket item */}
                </div>
            </div>


            <div className="checkout__right">
                <SubTotal />


            </div>
        </div>
    )
}

export default Checkout;
