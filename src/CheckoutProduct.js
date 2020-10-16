import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, description, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromCart= () => {
        // Remove the food from the cart
        dispatch({
            type: "REMOVE_FROM_CART",
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={ image } alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{ title }</p>
                <p className="checkoutProduct__description">{ description }</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            // eslint-disable-next-line
                            <p> &#11088; </p>
                        ))
                    }
                </div>

                <button onClick ={removeFromCart}> Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
