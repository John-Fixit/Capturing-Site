import React, { useState } from 'react'
import style from './style.css'
import RA from '../Images/R.A logo.png'
import img1 from '../Images/bgImg1.jpg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
function Upload() {
    const [convertedImage, setconvertedImage] = useState('')
    const [uploadedImage, setuploadedImage] = useState('')
    const [username, setusername] = useState('')
    const [rank, setrank] = useState('')
    const [church, setchurch] = useState('')
    const [message, setmessage] = useState('')
    const [status, setstatus] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const URI = 'http://localhost:4000/user/upload'
    const selectImage = (e) => {
        const selectedImage = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectedImage)
        reader.onload = () => {
            console.log(reader.result);
            const newFile = reader.result
            setconvertedImage(newFile)
        }
    }
    const formik = useFormik({
        initialValues: {
            memberName: '',
            rank: '',
            church: ''
        },
        onSubmit: (values) => {
            console.log(values);
            const details = { memberName: values.memberName, rank: values.rank, church: values.church, convertedImage }
            axios.post(URI, details).then((res) => {
                const responseFromServer = res.data
                if (responseFromServer.status) {
                    setisLoading(false)
                    setstatus(responseFromServer.status)
                    setmessage(responseFromServer.message)
                    setuploadedImage(() => {
                        return responseFromServer.memberImage
                    })
                    setusername(() => {
                        return responseFromServer.memberName
                    })
                    setrank(() => {
                        return responseFromServer.rank
                    })
                    setchurch(() => {
                        return responseFromServer.church
                    })
                    formik.memberName = ''
                }
            })
        },
        validationSchema: yup.object({
            memberName: yup.string().required('This field is required'),
            rank: yup.string().required('This field is required'),
            church: yup.string().required('This field is required')
        })
    })
    const ok = () => {

    }
    return (
        <>
            <div className='container-fluid shadow'>
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
                <div className='container-flui shadow py-4 cont_fluid'>
                    <div className='row'>
                        <div className='col-lg-6 px-4 py-2'>
                            <div className='card mx-auto pb-3 shadow'>
                                <h3 className='card-header text-center textColor'>Upload your Image here</h3>
                                <div className='card-body text-center'>
                                    {
                                        isLoading ? '' :
                                            status ? <p className='alert alert-success'>{message}</p> : <p className='alert alert-danger'>{message}</p>
                                    }
                                    <form action='' onSubmit={formik.handleSubmit} >
                                        <input type='file' className='form-control' onChange={(e) => selectImage(e)} />
                                        <div >
                                            <div className='form-floating'>
                                                <input type='text' name='memberName' className='form-control mt-2' placeholder='Candidate Name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                <label htmlFor=''>Candidate Full Name</label>
                                            </div>
                                            {
                                                formik.touched.memberName ? <small className='text-danger'>{formik.errors.memberName}</small> : ''
                                            }
                                        </div>
                                        <div >
                                            <div className='form-floating'>
                                                <input type='text' name='rank' className='form-control mt-2' placeholder='Candidate Rank' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                <label htmlFor=''>Candidate Rank</label>
                                            </div>
                                            {
                                                formik.touched.rank ? <small className='text-danger'>{formik.errors.rank}</small> : ''
                                            }
                                        </div>
                                        <div >
                                            <div className='form-floating'>
                                                <input type='text' name='church' className='form-control mt-2' placeholder='Candidate Church' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                <label htmlFor=''>Candidate Church</label>
                                            </div>
                                            {
                                                formik.touched.church ? <small className='text-danger'>{formik.errors.church}</small> : ''
                                            }
                                        </div>
                                        <button className='btn padding_nav mt-4 py-2 w-50 textColor' type='submit'>Upload</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 px-4 py-2 d-non'>
                            <div className='card mx-auto pb-3 shadow'>
                                <h3 className='card-header text-center textColor'>Image Uploaded</h3>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <img src={img1} className="card-img-top mx-auto" alt="..." />
                                        </div>
                                        <div className='col-6'>
                                            <div className="card-body">
                                                <h6 className="card-title ">Candidate Name : {username}</h6>
                                                <p className='card-text'>Rank : {rank}</p>
                                                <p className="card-text">Church : {church} </p>
                                                <button className='btn padding_nav py-2 textColor w-100 mt-3 text_small' onClick={ok}>Ok</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='card-footer text-center py-0 textColor fixed-bottom'>"We are ambassadors for Christ (2 Corintians 5 : 20)"</h4>
            </div>
        </>
    )
}

export default Upload