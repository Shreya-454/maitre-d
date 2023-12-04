import React from 'react'
import formimg from '../assets/images/formimg.png'
const form = () => {
  return (
        <div className='container pb-100' id='contact'>
            <div className='row'>
                <div className='col-md-6 col-12 d-flex justify-content-center flex-col '>
                    <div className='d-flex align-items-center gap-14'>
                        <p className='ff-work fs-16 txt-gradient fw-600 line2'>Contact US</p>
                        <div className='line-3'></div>
                    </div>
                    <h2 className='ff-work fs-40 fw-700 pt-3'>Get in touch!</h2>
                    <form className='pr-40'>
                        <div className='d-flex align-items-center w-100 gap-5 pt-74'>
                            <input type="text" placeholder='Full Name ' className='form-text ff-work fw-400 fs-16 bs-black opacity-70 pb-10 w-50' />
                            <input type="e-mail" placeholder='Email Address' className='form-text ff-work fw-400 fs-16 bs-black opacity-70 pb-10 ml-8 w-50' />
                        </div>
                        <input type="text" placeholder='Company Name' className='form-text ff-work fw-400 fs-16 bs-black opacity-70 pb-10 pt-24 w-100' />
                        <textarea name="text" id="" cols="30" rows="10" placeholder='Message' className='form-text h-71 ff-work fw-400 fs-16 bs-black opacity-70 pb-10 pt-24 w-100 resize-none'></textarea>
                    </form>
                    <div className='d-flex justify-content-md-start align-items-md-start'>
                        <button className='bs-white ff-work cursor-pointer fs-20 fw-700 mt-md-59 submitbtn2'>Submit</button>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <img src={formimg} alt="formsectionimage" className='w-100' />

                </div>
            </div>
        </div>
  )
}

export default form
