import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
           {basket?.length === 0 ? (
               <div> 
                   <h2> You Belly is Empty, time to Munch in </h2>
                   <p> You have no items in your food cart. To buy one or more delicasy, click "Add to Belly" next to the item. </p>
               </div>
           ) : (
               <div> 
                   <h2 className="checkout__title"> Your Food Cart </h2>
                   {/* List out all of the Checkout Products */}
                   {basket.map(item => (
                       <CheckoutProduct 
                        item={item.id}
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
    )
}

export default Checkout
