import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProductThunk=createAsyncThunk('product/fetchProductThunk',async()=>
{
    const res = await axios.get('https://dummyjson.com/products')
    localStorage.setItem('products',JSON.stringify(res.data))
    return res.data.products

})


const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[],
        loading:false,
        error:"",
        productsPerpage:10,
        currentPage:1
    },
    reducers:{
nextPage(state){
    state.currentPage++
},
prevPage(state){
    state.currentPage--
},
searchWithKey(state,action){
    if(action.payload)
    {
        state.product=state.product.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
    }
}
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state)=>{
            state.loading = true
        }),
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.loading = false
            state.product = action.payload
        }),
        builder.addCase(fetchProductThunk.rejected,(state)=>{
            state.loading = false
            state.product = []
            state.error ="Something went wrong"
        })


    }
})

export default productSlice.reducer
export const {nextPage,prevPage,searchWithKey}=productSlice.actions