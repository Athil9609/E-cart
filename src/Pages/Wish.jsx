import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishlist } from '../Redux/slices/WishSlice'
import { addToCart } from '../Redux/slices/CartSlice'
function Wish() {
  const {items} =useSelector((state)=>state.WishlistReducer)

  const dispatch=useDispatch()

  const handleAddToCart=(data)=>{
    console.log(data);

    dispatch(addToCart({...data}))
    dispatch(removeFromWishlist(data.id))
    
    

  }
  return (
<>
<h2 className='text-center my-3'>WishList</h2>
<div className="row container-fluid my-3">
  {
    items?.length>0 ?
    items.map(item=>( <div className="col-3"> 
      <div className="card h-100">
                    <img className="card-img-top" src={item?.thumbnail} alt="..." />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{item?.title}</h5>
                        {item?.price}
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button className='btn' onClick={()=>{dispatch(removeFromWishlist(item?.id))}}><i className="fa-solid fa-heart-circle-xmark" style={{color: "#ff0000",}} /></button>
                        <button className='btn' onClick={()=>{handleAddToCart(item)}}><i className="fa-solid fa-cart-plus" style={{color: "#63E6BE",}} /></button>
                      </div>
                    </div>
      </div>
    </div>))
    :
    <h3 className='text-center text-danger my-5'>No items added yet!</h3>
  }
 
</div>

</>  
)
}

export default Wish