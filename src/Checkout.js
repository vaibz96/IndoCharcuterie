import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import Subtotal from "./Subtotal"

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket?.length === 0 ? (
                <div> 
                    <h2> You Belly is Empty, time to Munch in </h2>
                    <p> You have no items in your food cart. To buy one or more delicasy, click "Add to Belly" next to the item. </p>
                </div>
                ) : (
                <div> 
                    <h2 className="checkout__title"> You have an amazing food choice  </h2>
                    {/* List out all of the Checkout Products */}
                    {basket?.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket?.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
                        
        </div>
    )
}

export default Checkout;
