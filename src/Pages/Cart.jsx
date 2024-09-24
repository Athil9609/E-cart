import React from 'react'
import { Row,Col, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { removeFromCart,increaseQuantity,decreaseQuantity, checkOut } from '../Redux/slices/CartSlice'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'


function Cart() {
  const dispatch=useDispatch()
  const {cart}=useSelector((state)=>state.CartlistReducer)
  return (
    <>
    <h2>Cart summary</h2>
    <Row className='container-fluid'>
<Col sm={12} md={8}>
{
  cart?.length>0 ?

  cart.map(item=>(
    <table className='table table-bordered table-striped border border-3 border-dark shadow m-3  table-responsive'>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Image</th>
        <th>Unit Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td><img className='img-fluid' src={item.thumbnail} alt="" /></td>
       <td>{item.price}</td>
        <td><div className='d-flex'>
          <button className='btn text-dark' onClick={()=>{dispatch(increaseQuantity(item?.id))}}>+</button>
          <input type="text" className='form-control w-50' value={item.quantity}/>
          <button className='btn text-dark' onClick={()=>{dispatch(decreaseQuantity(item.id))}}>-</button>
          </div></td>
          <td><button className='btn' onClick={()=>{dispatch(removeFromCart(item.id))}}><i className='fa-solid fa-trash' style={{color:"red"}}></i></button></td>
      </tr>
    </tbody>
  </table>
  ))

 
:
<h3 className='text-danger text-center my-5'>No items Added yet!</h3>

}


</Col>
<Col sm={12} md={4}>

  <div className='shadow m-3 p-5 border border-3 '>
    <h2>Total items:{cart?.length}</h2>
    <h2>Total Amount:{cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0).toFixed(2)}</h2>
    <div className="d-grid mt-3">
      <button className='btn btn-success' onClick={()=>{dispatch(checkOut())}}>
        CheckOut
      </button>
    </div>
  </div>
<div className='d-grid p-5 m-3'>
    <button className='btn btn-info mt-5'>Shop more</button>
  
</div>
</Col>
    </Row>
    </>
  )
}

export default Cart