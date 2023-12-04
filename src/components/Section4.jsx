import React from 'react'
import fourthimage from '../assets/images/fourthimage.png'
const Section4 = () => {
  return (
      <div>
          <section className='bg-white pt-md-100 pt-40 pb-md-100 pb-40' id='mode'>
              <div className="container">
                  <div className='d-flex justify-content-center align-items-center flex-col'>
                      <p className='txt-gradient fs-16 ff-work fw-400 line2'>Modules</p>
                      <h2 className='bs-black fs-40 fw-700 ff-work pb-md-100 pb-40 text-center'>Why Choose <span className='txt-gradient'>Maître D?</span> </h2>
                  </div>
                  <div className="row align-items-center">
                      <div className="col-md-6 col-12 pb-md-0 pb-40">
                          <img src={fourthimage} alt="fourthimg" className='w-100' />
                      </div>
                      <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-start align-items-md-start align-items-center flex-col">
                          <p className='ff-work fs-24 bs-black text-center text-md-start fw-700'>Manage Your <span className='txt-gradient'>Customer Queues</span> </p>
                          <p className='max-w-484 bs-black fs-16 ff-work text-center text-md-start fw-400 opacity-70 pt-12 lh-154'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                          <p className='max-w-484 bs-black fs-16 ff-work text-center text-md-start fw-400 opacity-70 pt-21 lh-154'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                          <button className='bs-white ff-work fs-20 fw-700 mt-25 cursor-pointer submitbtn2 text-nowrap '>Buy Now</button>

                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Section4
