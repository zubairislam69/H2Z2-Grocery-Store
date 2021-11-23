import React from 'react'
import './bakedgrocery.css';
import Cook from '../../../images/groceryItemImages/Baked Goods/cookies.jpg';

const Cookies = () => {
    return (
        <div className="baked-container">
            <div>
                <h1>Cookies</h1>
            </div>
            <div className="top-image ">
                <img src={Cook}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart"><a href="/Products">VIEW ITEM</a></button></li>
            </ul>
        </div>
    )
}

export default Cookies;
