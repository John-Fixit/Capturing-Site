import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import style from './style.css'
import img1 from '../Images/bgImg1.jpg'
import img2 from '../Images/bgImg2.jpg'
import img3 from '../Images/bgImg3.jpg'
import { FaCartPlus } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() => {
    getHome()
    AOS.init()
    AOS.refresh()
  }, [])
  const navigate = useNavigate()
  const [products, setproducts] = useState([])
  const HOMEURI = 'http://localhost:4000/user/home'
  const CARTURI = 'http://localhost:4000/user/cart'
  const [userId, setuserId] = useState('')
  const [index, setindex] = useState('')
  const [productVariation, setproductVariation] = useState(1)
  const [isLoading, setisLoading] = useState(true)
  const getHome = () => {
    setisLoading(false)
  }
  return (
    <>
      <div className='container-fluid cont_fluid'>
        <div id="carouselExampleFade" className="col-md-12 carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} alt="..." className='card-img-top carousel_img' style={{ height: '70vh' }} />
            </div>
            <div className="carousel-item">
              <img src={img2} alt="..." className='card-img-top carousel_img' style={{ height: '70vh' }} />
            </div>
            <div className="carousel-item">
              <img src={img3} alt="..." className='card-img-top carousel_img' style={{ height: '70vh' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='container-fluid products_row'>
          <div className='d-flex justify-content-between'>
            <h4 className='text-capitalize'>Popular product</h4>
            <h5 className='text-muted'>See all product</h5>
          </div>
        </div>
        <div className='container-fluid'>
          {
            isLoading ? <div class="spinner-border text-warning bg-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div> :
              <div className='col-12 products_row'>
                <div className='row'>

                  <div className='col-lg-3 col-md-6 mt-3' >
                    <div className="card h-100 rounded-3 shadow" data-aos='zoom-in' data-aos-delay='50' >
                      <img src={img1} className="card-img-top mx-auto" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Candidate Name</h6>
                        <p className='fw-bold'>Rank</p>
                        <p className="card-text">Church </p>
                      </div>
                      <div className="card-footer">

                      </div>
                    </div>
                  </div>


                </div>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Home