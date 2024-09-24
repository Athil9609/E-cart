import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const WishlistSlice=createSlice({
    name:'Wishlist',
    initialState:{
        items:[]
    },
    reducers:{
        addToWishlist(state,action){
            const existing=state.items.find(item=>item.id==action.payload.id)
            if(existing){
                toast.warning("item already added to wishlist")
            }
            else{
                state.items.push(action.payload)
                toast.success("item added to Wishlist")
            }
           
            

        },
        removeFromWishlist(state,action){
            state.items=state.items.filter(item=>item.id!=action.payload)
        }
    }
})

export default WishlistSlice.reducer
export const{addToWishlist,removeFromWishlist}=WishlistSlice.actions