import React from 'react'
import lineroll from '../assets/images/lineroll.png'
import herologo from '../assets/images/herologo.png'
const Mynav = () => {
    return (
        <div>
            <section className='hero-section-bg min-h-1140  relative'>
                <nav className='py-30'>
                    <div className="container">
                        <div className='d-flex justify-content-between align-items-center'>
                            <a href=""><img src={herologo} alt="logo" /></a>
                            <label for="menuicon" class="d-flex z-index rotate">
                                <span class="mr_3"></span>
                                <span class="mr_3"></span>
                                <span class="mr_3"></span>
                            </label>
                            <input type="checkbox" id="menuicon" hidden />
                            <ul className='gap-46 d-flex  small_screen'>
                                <li><a href="#home" className='bs-black ff-work fs-16 fw-400'>Home</a></li>
                                <li><a href="#mode" className='bs-black ff-work fs-16 fw-400'>Modules</a></li>
                                <li><a href="#price" className='bs-black ff-work fs-16 fw-400'>Pricing</a></li>
                                <li><a href="#feature" className='bs-black ff-work fs-16 fw-400'>Features</a></li>
                                <li><a href="#contact" className='bs-black ff-work fs-16 fw-400'>Contact Us</a></li>
                                <li><span><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M8.70898 16.4198C10.484 16.4194 12.2078 15.8252 13.606 14.7318L18.002 19.1278L19.416 17.7138L15.02 13.3178C16.114 11.9195 16.7086 10.1952 16.709 8.4198C16.709 4.0088 13.12 0.4198 8.70898 0.4198C4.29798 0.4198 0.708984 4.0088 0.708984 8.4198C0.708984 12.8308 4.29798 16.4198 8.70898 16.4198ZM8.70898 2.4198C12.018 2.4198 14.709 5.1108 14.709 8.4198C14.709 11.7288 12.018 14.4198 8.70898 14.4198C5.39998 14.4198 2.70898 11.7288 2.70898 8.4198C2.70898 5.1108 5.39998 2.4198 8.70898 2.4198Z" fill="black" />
                                </svg></a></span></li>

                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="container relative" id='home'>
                    <div className='d-flex justify-content-center'>
                        <h1 className='bs-black fs-61 ff-work fw-800 pt-md-100 pt-30 text-center max-w-826 '>Maitre D – Store Management for Barbers</h1>
                    </div>
                    <div className='d-flex justify-content-center pt-30'>
                        <button className='bs-white ff-work fs-20 cursor-pointer fw-700 mt-md-59 px-37 py-12 submitbtn'>Submit</button>
                    </div>
                    <img src={lineroll} alt="lineroll" className='pos-absolute d-none d-md-block' />
                </div>
                <div className="circleellipse d-none d-md-block"></div>
            </section >
        </div >
    )
}

export default Mynav
