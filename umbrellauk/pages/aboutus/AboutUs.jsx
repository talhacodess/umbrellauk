import React, { useState } from 'react'
import banner from '../../src/assets/banner.jpg'
import { IoPlayCircleOutline } from "react-icons/io5";
import map from '../../src/assets/map-01.png'
import VideoPopup from './videoPopup';
import Container from '../../components/Container';
import shipping from '../../src/assets/free-shipping.png'
import customer from '../../src/assets/customer-support-1.png'
import secured from '../../src/assets/securd-payment-1.png'
import money from '../../src/assets/money-back-gurantee-1.png'
import windowboxes from '../../src/assets/Window-Boxes.webp'
import infographics from '../../src/assets/infographics-uk-1.webp'
import wicon1 from '../../src/assets/w-icon.png'
import wicon2 from '../../src/assets/w-icon2.png'
import wicon3 from '../../src/assets/w-icon3.png'
import wicon4 from '../../src/assets/w-icon4.png'
import wicon5 from '../../src/assets/w-icon5.png'
import wicon6 from '../../src/assets/w-icon6.png'


function AboutUs() {
  const [showModel, setShowModel] = useState(false)
  console.log(showModel, "Video Popup");

  return (
    <>
      {/**Main banner about Start */}
      <div className='bg-[#293453]'>
        <Container>
          <div className=' rounded-[8px] p-5 h-[230px] flex flex-col justify-center items-center space-y-5 m-2'>
            <h2 className='md:text-[43px] text-[30px] text-white font-semibold leading-10 text-center'>About
              <span className='md:text-[43px] text-[30px] text-[#ff931e]'> us</span></h2>
            <p className='text-white text-[17px] capitalize text-center'>Who we are, our values, mission, and vision.
            </p>


          </div>
        </Container>

      </div>

      {/**Main banner about end */}
      {/**Icons  Start */}
      <div className='bg-[#f3f3f3]'>
        <Container>

          <div className='grid sm:grid-cols-4 p-2 grid-cols-2 gap-1'>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={shipping} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453]  sm:text-[18px]  text-[12px] font-semibold'>Free Shipping & Return</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>Free shipping on orders over $99</p>
                </div>

              </div>
            </div>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={customer} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453]  sm:text-[18px]  text-[12px] font-semibold'>Customer Support 24/7</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>Instant access to perfect support</p>
                </div>

              </div>
            </div>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={secured} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453]  sm:text-[18px]  text-[12px] font-semibold'>100% Secured Payment</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>We ensure secured Payment!</p>
                </div>

              </div>
            </div>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={money} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453] sm:text-[18px]  text-[12px] font-semibold'>Money Back Guarantee</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>We ensure secured Payment!</p>
                </div>

              </div>
            </div>

          </div>


        </Container>
      </div>
      {/**map section Start */}
      <div className='bg-[#F4ECFB]'>
        <Container>
          
          <div className='mt-5 bg-white p-5 rounded-2xl text-center '>
            <p className=' text-lg tracking-wide leading-6 '>The production team is very efficient which helps us in completing every task in minimum time span. Timely printing and shipment are the core values of our company. Umbrella Custom Packaging takes pride in delivering the best solution at reasonable price. Cardboard boxes, Kraft boxes, corrugated boxes, window boxes, die cut boxes and wedding boxes come under our range of expertise. From these box types, we accept the responsibility to manufacture spectacular packaging for electronics, food items, toys, cosmetics, etc. You name it and we have it. Umbrella Custom Packaging is a specialist in producing catchy customizations. Die cut, embossing, perforations, laminations, UV, glossy, matte and several other options are available for the designing of your customized packaging boxes. We use environment and consumer friendly stocks for manufacturing the boxes without compromising on excellence. Our competent work force enables us presenting impeccable printed designs and styles.<br /><br />

              Umbrella Custom Packaging has been catering the packaging needs of thousands of businesses across the globe. We have achieved a magnanimous success in short period of time due to our premium printing services, fastest turnaround, free shipping and unique customized designing. Umbrella Custom Packaging is helping many macro and mini businesses in their packaging needs. For specific events, we offer exciting favor and gift boxes with special discounts. Customer satisfaction is our top priority. To facilitate the customers by cutting down their expenses, we not only print at our in-house press in USA but also utilize the offshore printing facilities in Asia and Africa. We look forward to hear from your business in the near future. Our customer care services are available around the clock. For custom quote or inquiry, feel free to contact our representatives from Monday-Friday.</p>
          </div>
           {/**How it works section sTART*/}


      <div className='bg-[#f3f3f3] my-5 sm:p-5 p-0 rounded-2xl'>
        <Container>
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center'>
            <div className=''>
              <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>How it works</h2>
              <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mt-5'>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon1} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm text-center'>No Die & Plate Charges</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon2} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm text-center'>No Minimum Order Qty</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon3} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm text-center'>Free Design</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon4} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm text-center'>Quickest Turnaround</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon5} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm text-center'>Cheapest Prices</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon6} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm text-center'>Free Shipping</h3>
                </div>

              </div>

            </div>
            <div className='flex justify-center items-center'><img src={infographics} alt="" width={560} height={670} /></div>

          </div>

        </Container>



      </div>

      {/**How it works section end*/}

          <div className='grid md:grid-cols-2 grid-cols-1 space-y-2 '>
            <div className='' >
              <img src={map} alt="" className='w-full' />


            </div>
            <div className=' flex flex-col justify-center items-center  gap-5'>
              <div className='flex text-white gap-5 '>
                <div className='bg-[#293453]  rounded-[8px] flex flex-col items-start p-2.5 space-y-5'>
                  <h1 className='text-[32px]'>5+</h1>
                  <p className='text-[14px]'>Head Quarter on Global Family</p>
                </div>
                <div className='bg-[#293453]  rounded-[8px] flex flex-col items-start p-2.5 space-y-5'>
                  <h1 className='text-[32px]'>1000+</h1>
                  <p className='text-[14px]'>Satisfied Customers All Over the Globe </p>
                </div>
                <div></div>

              </div>
            </div>


          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 '>
            <div className='  flex flex-col justify-center items-start p-2.5 space-y-5 md:border-r-1 border-0'>
              <h1 className='text-[32px]'>USA</h1>
              <p className='text-[14px] text-start'>9854 National Blvd #1042, Los Angeles, CA 90034, United States</p>
            </div>
            <div className='  flex flex-col items-start p-2.5 space-y-5 md:border-r-1 border-0'>
              <h1 className='text-[32px]'>Uk</h1>
              <p className='text-[14px] text-start'>275 New North Road Islington Suite 1946 London, N1 7AA United Kingdom</p>
            </div>
            <div className='  flex flex-col items-start p-2.5 space-y-5'>
              <h1 className='text-[32px]'>Canada</h1>
              <p className='text-[14px] text-start'>7398 Yonge St #6d, Thornhill, ON L4J 8J2, Canada </p>
            </div>

          </div>

          

        </Container>

      </div>

      {/**map section  end */}
      
    </>

  )
}

export default AboutUs
