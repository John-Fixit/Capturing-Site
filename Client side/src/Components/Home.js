import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import style from './style.css'
import img1 from '../Images/marshal.png'
import img2 from '../Images/bgImg2.jpg'
import img3 from '../Images/bgImg3.jpg'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import RA from '../Images/R.A logo.png'

function Home() {
  useEffect(() => {
    getHome()
    AOS.init()
    AOS.refresh()
  }, [])
  const navigate = useNavigate()
  const HOMEURI = 'https://royaliwacapturingsite.herokuapp.com/home'
  const DELETEURI = 'https://royaliwacapturingsite.herokuapp.com/delete'
  const [isLoading, setisLoading] = useState(true)
  const [allMember, setallMember] = useState([])
  const getHome = () => {
    axios.get(HOMEURI).then((res) => {
      console.log(res.data);
      const responseFromServer = res.data
      if (responseFromServer.status) {
        setisLoading(false)
        setallMember(() => {
          return responseFromServer.member
        })
      }
      else {
        setisLoading(true)
      }
    })
  }
  const dlt=(memberId)=>{
    console.log(memberId);
    axios.post()
  }
  return (
    <>
      <div className='container-fluid cont_fluid'>
        <div className='container-fluid padding_nav fixed-top'>
          <div className='container d-flex justify-content-between'>
            <img src={RA} alt='loading...' className='card-img-top' style={{ width: '10vh', height: '10vh' }} />
            <div className='pt-3'>
              <div className='text-uppercase text-center py-auto text-light fs-3 address'>Nigerian Baptist Convention</div>
              <div className='text-uppercase text-center py-auto text-light fs-3 short_address'>N. B. C.</div>
              <div className='textColor text-center fs-4 address'>Ogbomoso Baptist Conference</div>
              <div className='textColor text-center fs-4 short_address'>Ogbomoso B. C.</div>
              <div className='text-light text-center fs-5 iwa'>Iwa-Bi-Olorun Baptist Association</div>
            </div>
            <img src={RA} alt='loading...' className='card-img-top' style={{ width: '10vh', height: '10vh' }} />
          </div>
        </div>
        <div id="carouselExampleFade" className="col-md-12 carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} alt="..." className='card-img-top carousel_img'/>
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
        <div className='text-end'>
          <Link to='/' className='textColor padding_nav rounded-3 py-2 '>Upload Page</Link>
        </div>
        <div className='container-fluid mt-3 text-center'>
          {
            isLoading ? <div className="spinner-border text-warning bg-dark opacity-75" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> :
              <div className='col-12 products_row'>
                <div className='row'>
                  {
                    allMember.map((eachMember) => (
                      <div className='col-lg-3 col-md-6 col-sm-12 mt-3' >
                        <div className="card rounded-3 shadow h-100 col-sm-12" data-aos='zoom-in' data-aos-delay='50' >

                          <img src={eachMember.memberImage} className="card-img-top mx-auto pt-2 w-75" alt="..." />
                          <div className="card-body text-start">
                            <h6 className="card-title fw-bold">Name : {eachMember.memberName}</h6>
                            <p className='fw-bold'>Rank : {eachMember.rank}</p>
                            <p className="card-text fw-bold">Church : {eachMember.church}</p>
                          </div>
                          <div className="card-footer text-center">
                            <button className='btn padding_nav py- textColor w-100' style={{ backgroundColor: '#2D1783 important' }} onClick={()=>dlt({memberId: eachMember._id})}><FaTrash /> Delete</button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
          }
        </div>
        <h5 className='card-footer text-center py-0 textColor fixed-bottom'>"We are ambassadors for Christ (2 Corintians 5 : 20)"</h5>
      </div>
    </>
  )
}

export default Home