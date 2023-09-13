import React, { createContext, useState } from 'react'
import PRODUCTS from '../models/mock-product';

export const ShopContext = createContext<any>({});
const getDefaultCart = () => {
    let cart = [];
    for(let i=1; i<PRODUCTS.length +1; i++){
        cart[i] = 0;
    }
    return cart
}
export const ShopContextProvider = (props:any) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId:any) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId] + 1}) );
    };

    const RemoveFromCart = (itemId:any) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId] - 1}) );
    };
    
    const updateCartItemCount = (NewAmount:number , itemId:number) => {
        setCartItems((prev) => ({...prev, [itemId]:NewAmount}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] >0 ){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo!.price
            }
        }
        return totalAmount;
    }
    const countItems = () => {
        let itemCounter = 0;
        for(const item in cartItems){
            if(cartItems[item] >0 ){
                itemCounter += cartItems[item] 
            }
        }
        return itemCounter;
    }
    const contextValue = {
        cartItems,
        addToCart,
        RemoveFromCart,
        updateCartItemCount,
        getTotalAmount,
        countItems,
    };
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  
}
