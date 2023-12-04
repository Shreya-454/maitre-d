import React from 'react'
import whitelogo from '../assets/images/whitelogo.png'

const footer = () => {
    return (
        <div>
            <div className='footer-bg relative'>
                <div className="container pt-50">
                    <div className='d-flex flex-col align-items-center justify-content-center pt-60'>
                        <div className="text-center"><img className='pb-15 footer-logo' src={whitelogo} alt="fooeter-img" /></div>
                        <p className='fs-14 ff-work fw-400 bs-white max-w-370 text-center lh-154 mx-auto mb-35'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                    </div>
                    <ul className='d-flex align-items-center justify-content-center gap-50 py-30'>
                        <li ><a href="" className='fs-14 ff-work fw-600  bs-white'>Navigation</a></li>
                        <li> <a href="" className='fs-14 ff-work fw-600  bs-white'>Company</a></li>
                        <li> <a href="" className='fs-14 ff-work fw-600  bs-white'>Contact</a></li>

                    </ul>
                </div>
                <div className='footer-line'></div>
                <p className='ff-work text-normal fs-12 bs-white opacity-70 text-center  py-13'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
            </div>
        </div>
    )
}

export default footer
