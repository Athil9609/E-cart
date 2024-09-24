import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
  <MDBFooter className='bg-info text-white'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>E-cart</h5>

            <p className='text-dark'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
              <Link to={'/'} className='text-dark'>
                  Home
                </Link>
              </li>
              <li>
              <Link to={'/wish'} className='text-dark'>
                  Wishlist
                </Link>
              </li>
              <li>
              <Link to={'/cart'} className='text-dark'>
                  Cart
                </Link>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-3'>Feedback</h5>
            <textarea name="" className='form-control' id=""></textarea>
            <button className='btn btn-success mt-3'>Send</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      
    </MDBFooter>
    </>
  )
}

export default Footer