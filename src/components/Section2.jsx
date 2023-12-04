import React from 'react'
import section2img from '../assets/images/section2img.png'
const section2 = () => {
  return (
      <div>
          <section className='pb-md-100 pb-40'>
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6 col-12">
                          <img src={section2img} alt="secimg" className='w-100' />
                      </div>
                      <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-start align-items-md-start align-items-center flex-col">
                          <p className='txt-gradient fs-16 ff-work text-center text-md-start fw-400 line1'>About Us</p>
                          <h2 className='bs-black fs-40 ff-work text-center text-md-start fw-700 pt-14'>What is <span className='txt-gradient'>Maître D?</span> </h2>
                          <p className='bs-black fs-16 ff-work fw-400  text-center text-md-start pt-12 max-w-453 opacity-70 lh-168'>Maître D is a full service solution, designed specifically for salons and barbershops. Our approach is modular, which means you only pay for the functionality that you need. Each module is completely integrated into the solution, so your entire business always remains syncronized. Maître D allows you to see everything within your business, from one location. </p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default section2
