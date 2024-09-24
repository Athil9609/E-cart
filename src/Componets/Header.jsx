import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {  useSelector,useDispatch } from 'react-redux';
import { searchWithKey } from '../Redux/slices/ProductSlice';

function Header() {
  const {items}=useSelector((state)=>state.WishlistReducer)
  const {cart}=useSelector((state)=>state.CartlistReducer)
  const count=items.length

  const [key,setKey]=useState('')
  const dispatch=useDispatch()
  
  
  return (
    <>
       <Navbar className="bg-info ">
        <Container>
          <Navbar.Brand className='' href="#home">
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
              <i className="fa-solid fa-cart-shopping" />
               {' '}
               E-cart
          </Link>
          </Navbar.Brand>
          <div className='d-flex'>
            <div className='d-flex'>
              <input type="text" onChange={(e)=>setKey(e.target.value)} placeholder='Search products' className="form-control me-2" />
              <button onClick={()=>dispatch(searchWithKey(key))} className="btn btn-success me-4">Search</button>
            </div>
              <Link className='btn btn-outline-danger border-white me-3' to={'/wish'}>
              <i className="fa-solid fa-heart" style={{color: "#ff0000",}} /> <span className='text-white'>Wishlist <span className=' ms-2 badge bg-light rounded-5'>{count}</span></span>
              </Link>
              <Link className='btn btn-outline-success border-white' to={'cart'}>
              <i className="fa-solid fa-cart-shopping" style={{color: "green",}} /> <span className='text-white'>Cart <span className='ms-2 badge bg-light rounded-5'>{cart.length}</span></span>
              </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header