// eslint-disable-next-line
import React from 'react';
import logo from "./images/logo2.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">
                <img className="header__logo" src={ logo } alt="" />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 Links (Sign-in, Orders, Special-Combos) */}
            <div className="header__nav">
                {/* 1st Link Sign-in */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Hello Foodie </span>
                        <span className="header__optionLineTwo"> Sign In </span>
                    </div>   
                </Link>
            </div>

            <div className="header__nav">
                {/* 2nd Link Orders */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Hungrie </span>
                        <span className="header__optionLineTwo"> then, Order </span>
                    </div>   
                </Link>
            </div>

            <div className="header__nav">
                {/* 3rd Link Special-combos */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Chef's </span>
                        <span className="header__optionLineTwo"> Special-Combos </span>
                    </div>   
                </Link>
            </div>

            {/* Basket (cart) */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping Basket Icon */}
                    <ShoppingBasketIcon />
                    {/* Number of items in the basket */}
                    <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
