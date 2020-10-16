import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://www.weightwatchers.com/us/sites/default/files/styles/wwvs_default_image/public/article_masthead/0p_foodlist_purple_1200x628.jpg?itok=3ErSwv7S" alt=""></img>
            <div className="home__row">
                <Product 
                    id = {145742}
                    description = "You can enjoy this lip-smacking butter chicken dish on occasions such as kitty party, potluck, and even buffet."
                    title = "Butter Chicken"
                    price = {7.99}
                    image = "https://i0.wp.com/notacurry.com/wp-content/uploads/2015/02/Best-butter-chicken-recipe-instagram.jpg?resize=682%2C600&ssl=1"
                    rating = {5}
                />
                <Product 
                    id = {186342}
                    description = "Try out this fresh Cumin garnished Rice also known as Jeera rice Mainly consumed in North India and Pakistan as Satisfactory Main course with Dal and Gravies."
                    title = "Jeera Rice"
                    price = {4.99}
                    image = "https://www.cookwithmanali.com/wp-content/uploads/2018/08/Instant-Pot-Jeera-Rice.jpg"
                    rating = {5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id = {243527}
                    description = "Gulab jamun is a milk-solid-based sweet from the Indian subcontinent, and a type of mithai, popular in South Asia."
                    title = "Gulab Jamun"
                    price = {11.99}
                    image = "https://1.bp.blogspot.com/-udpj6gSzjG4/UyEjpLS-6VI/AAAAAAAAf1E/3OIFFAPaX8s/s1600/gj4.jpg"
                    rating = {5}
                />
                <Product 
                    id = {245381}
                    description = "Rasmalai is a bengali dish made with spongy cottage cheese balls. The word 'Ras' inidcates the juice that oozes of these cheese balls."
                    title = "Ras Malai"
                    price = {11.99}
                    image = "https://www.rachnas-kitchen.com/wp-content/uploads/2017/07/rasmalai-2-e1505245876472-gpo.jpg"
                    rating = {5}
                />
                <Product 
                    id = {256323}
                    description = "Rabdi Kheer is a type of pudding from the Indian subcontinent, made by boiling milk, sugar, and rice."
                    title = "Rabdi Kheer"
                    price = {11.99}
                    image = "https://zaykarecipes.com/wp-content/uploads/2016/12/kheer-recipe.jpg"
                    rating = {5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id = {356281}
                    description = "You can enjoy this Aamazing, Head Chef Combo designed only for customers who love eating Home Made Indian Delicacies"
                    title = "Combo Package : 1 Entrée, 3 Sides, 1 Sweet, 1 Refresher at 18.99$ excluding tax*"
                    price = {18.99}
                    image = "https://media-cdn.tripadvisor.com/media/photo-s/16/62/2e/bb/punjabi-special-veg-thali.jpg"
                    rating = {5}
                />
            </div>
        </div>
    )
}

export default Home
