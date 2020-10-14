import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, description, price, rating }) {
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue();

    const addToCart = () => {
        // ADD ITEM TO BASKET
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id:id,
                title:title,
                image:image,
                description:description,
                price:price,
                rating:rating,
            },
        });

    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p> 
                <p>{description}</p>
                <p className="product__price">
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            // eslint-disable-next-line
                            <p> &#11088; </p>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} className="product__image" alt=""></img>
            <button onClick={addToCart}>Add to your Belly</button>
        </div>
    )
}

export default Product;
