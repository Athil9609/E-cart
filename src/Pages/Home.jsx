import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductThunk } from '../Redux/slices/ProductSlice';
import Spinner from 'react-bootstrap/Spinner';
import { nextPage,prevPage } from '../Redux/slices/ProductSlice';
function Home() {

  const dispatch= useDispatch()

  const {product,loading,error,productsPerpage,currentPage}= useSelector((state)=>state.productReducer)

  useEffect(()=>{
    dispatch(fetchProductThunk())
     console.log(product);


    
  },[])

  const totalpages=Math.ceil(product?.length/productsPerpage)
  console.log(totalpages);
  
  const lastProductIndex=currentPage*productsPerpage
  const firstProductIndex=lastProductIndex-productsPerpage
  const visibleProducts=product?.slice(firstProductIndex,lastProductIndex)
  console.log(visibleProducts);
  


  const handleNext=()=>{
    if(currentPage<totalpages){
      dispatch(nextPage())
    }
  }

  
  const handlePrev=()=>{
    if(currentPage>1){
      dispatch(prevPage())
    }
  }
  return (
    <>
      <header className='' >

    <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <Carousel>
        <Carousel.Item>
         <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0070/7032/files/Header_43a6fbaa-305a-4bda-8ef7-5e7f4e1278da.png?v=1694450194" alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className='img-fluid' src="https://png.pngtree.com/thumb_back/fh260/background/20221218/pngtree-technology-and-multimedia-online-shopping-concept-sale-tv-buy-photo-image_43548278.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className='img-fluid' src="https://i.pinimg.com/736x/c0/c0/68/c0c0688a33511ddf927c2e9f2af478ca.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
          </div>
    </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       {
        loading ? 
        <h3 className='text-center'>
           <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </h3>
        :
        (
        error?.length>0 ?
        <h3>{error}</h3>
        :
        <>
        {
          visibleProducts?.map(Item=>(
            <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={Item?.thumbnail} alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{Item?.title}</h5>
                 {Item?.price}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><Link to={`/view/${Item?.id}`} className="btn btn-outline-primary">View more</Link></div>
              </div>
            </div>
          </div>
          ))
        }
        </>

      )
       }
         
     
            
          </div>
        </div>
      </section>
      {/* pagination */}


      <div className='mt-4 justify-content-center d-flex'>
<div>
  <button className="btn" onClick={handlePrev}>
  <i className="fa-solid fa-angles-left text-dark" /></button>  {' '}
  1/3
  {' '}
  <button className="btn" onClick={handleNext}>
  <i className="fa-solid fa-angles-right text-dark"/></button>
  
</div>
      </div>
    </>)
}

export default Home