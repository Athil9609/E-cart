import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartListSlice=createSlice({
    name:'cart',
    initialState:{cart:[]},

    reducers:{
        addToCart(state,action){
            const existing=state.cart.find(item=>item.id==action.payload.id)
            if(existing){
                // const product=action.payload
                existing.quantity+=1
                state.cart=state.cart.filter(item=>item.id!=action.payload.id)
                state.cart.push(existing)
                toast.success("Item Quantity increased")
            }
            else{
                const product=action.payload
                product.quantity=1
                state.cart.push(product)
                toast.success("Item Added to Cart")
            }
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            toast.success("Item removed from cart")
        },
        increaseQuantity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decreaseQuantity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
            }
            else{
                existing.quantity--
            }
        },
        checkOut(state){
            state.cart=[]
            toast.success("Order placed")
           

        }
    }

})

export default cartListSlice.reducer
export const{addToCart,removeFromCart,increaseQuantity,decreaseQuantity,checkOut}=cartListSlice.actions