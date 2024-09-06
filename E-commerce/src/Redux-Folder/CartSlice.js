import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem : [],
    totalAmount: 0
};

const CartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const newItem = action.payload
            const existItem = state.cartItem.find(item => item.id===newItem.id)
            
            if(!existItem){
                state.cartItem.push({...newItem,quantity:1})
                state.totalAmount += newItem.price
            }
            else{
                existItem.quantity++;
                state.totalAmount += newItem.price
            }
        },
        removeFromCart(state,action){
           const del = action.payload
           const existItem = state.cartItem.find(item=>item.id===del.id )

           console.log(existItem.quantity);
           
           if(existItem.quantity === 1 ){
              state.cartItem = state.cartItem.filter(item => item.id !== del.id)
           }
           else{
              existItem.quantity--
            }
            state.totalAmount -= existItem.price ;
        },
        clearAllFromCart(state){
            state.cartItem = [];
            state.totalAmount = 0;
        }
    }
});

export const {addToCart , removeFromCart , clearAllFromCart} = CartSlice.actions
export default CartSlice.reducer

export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(price);
};