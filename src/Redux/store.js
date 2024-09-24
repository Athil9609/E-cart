import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import WishSlice from "./slices/WishSlice";
import CartSlice from "./slices/CartSlice";

const ProductStore=configureStore({
    reducer:{
        productReducer:ProductSlice,
        WishlistReducer:WishSlice,
        CartlistReducer:CartSlice

    }
})

export default ProductStore