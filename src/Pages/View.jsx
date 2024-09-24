import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../Redux/slices/WishSlice'
import { addToCart } from '../Redux/slices/CartSlice'

function View() {
    const dispatch=useDispatch()
    const[data,setData]=useState({})
    const{id}=useParams()
    console.log(id);
    useEffect(()=>{
        const pro=JSON.parse(localStorage.getItem('products')).products
       const products =  pro.find(item=>item.id == id)
        setData(products)
    },[])


    const handleWish=()=>{
        dispatch(addToWishlist(data))
    }
    
  return (
    <>
     <section className="py-5">
        {
            data &&
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data?.thumbnail} alt="..." /></div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">{data?.title}</h1>
                        <div className="fs-5 mb-5">
                            <span>{data?.price}$</span>
                        </div>
                        <p className="lead">{data?.description}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-success flex-shrink-0" type="button" onClick={()=>{dispatch(addToCart(data))}}>
                            <i className="fa-solid fa-cart-plus" style={{color: "#63E6BE",}} />
                                Add to cart
                            </button><button onClick={handleWish} className="btn btn-outline-danger flex-shrink-0" type="button">
                            <i  className="fa-solid fa-heart-circle-plus"  style={{color: "#ff0000",}} />
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
            
        </section>
    </>
  )
}

export default View