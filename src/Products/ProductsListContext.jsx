import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Cart } from '../Context/Context'

const ProductListContext = () => {
    const { products, cart, dispatch } = useContext(Cart)

    const addToCart = (name) => {
        dispatch({type:'ADD_ITEM',payload:name})
    }

    // useEffect(() => {
    //     console.log(`cart from Product List Context : ${cart}`)
    // })

    return (
        <div>
            {products.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <button onClick={() => addToCart(item.name)} >Add to Cart</button>
                    </div>)

            })}
            <div>
                hello
                {cart.map((item) => {
                    return <p>{item}</p>
                })}
            </div>
            <Link to="/cart">Click to view Cart</Link>
        </div>)
}

export default ProductListContext;