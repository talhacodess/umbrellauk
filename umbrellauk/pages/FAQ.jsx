import React from 'react'
import FaqCom from '../components/FaqCom'
import Container from '../components/Container'
import agent from '../src/assets/call-agent.png'
import { Link } from 'react-router-dom'
import Blog from './../components/blog/Blogs'

function FAQ() {
  return (
    <div>
          {/**Main banner about Start */}
      <div className='bg-[#293453]'>
        <Container>
          <div className=' rounded-[8px] p-5 h-[230px] flex flex-col justify-center items-center space-y-5 m-2'>
            <h2 className='md:text-[43px] text-[30px] text-white font-semibold leading-10 text-center'>Frequently  
              <span className='md:text-[43px] text-[30px] text-[#ff931e]'> Asked</span> Questions</h2>
            <p className='text-white text-[17px] capitalize text-center'>Find quick answers to the most common questions about our services, processes, and support.
            </p>


          </div>
        </Container>

      </div>

      {/**Main banner about end */}
      {/**Frequently Asked Questions Start*/}
      <Container className='py-10'>
        <div className='bg-[#FFD7AC] h-[65px]  relative w-full rounded'><img src={agent} width={125} height={125} alt="" className=' absolute top-[-50%] right-[45%] ' /></div>
       
        <div className='grid grid-cols-2 gap-4 mt-10'>
          <div>
            <FaqCom title={"Do you offer Free Samples"} answer={"Yes, if you need any random samples to check the material and printing quality. If you need the samples of your customized box, we do not offer free samples or material kits."} />

            <FaqCom title={"How can I create my design"} answer={"All you need send us your artwork and we would provide you a 3D digital Mockup of your box along with a template."} />

            <FaqCom title={"Do you charge extra, based on the number of colors and ink coverage"} answer={"No, all the products are printed in full color at no extra charge."} />

            <FaqCom title={"What kind of custom packaging do you offer"} answer={
              <> Visit our Home Page to see the full range of what we are offering. Each custom packaging option has a free and easy-to-use online designer that’ll help you create attractive and unforgettable unboxing experiences. Don’t see what you’re looking for? Reach out to us at{" "}
                <Link to="mailto:sales@umbrellapackaging.com" className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com</Link>.</>} />

            <FaqCom title={"Do you have a pick-up location"} answer={
              <>
                Yes, we do have a pick-up location but usually we ship the orders to the doorstep. please email us at <Link to="mailto:sales@umbrellapackaging.com" className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com</Link> for more details.
              </>
            } />
          </div>
          <div>
            <FaqCom title={"How can I reorder"} answer={"Simply, contact to the same email you contacted last time and place your reorder."} />

            <FaqCom title={"What is the best way to contact you"} answer={
              <>Contact us via email any time <Link to={"mailto:sales@umbrellapackaging.com"} className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com.</Link>  You can also DM us through Facebook or Instagram, where our team will get back to you within 24 – 48 business hours.</>
            } />

            <FaqCom title={"What is your MOQ? Do you print small order quantities"} answer={"Our MOQ is 100 boxes, yes we can offer less number of boxes for ordering."} />

            <FaqCom title={"Do you print larger order quantities?"} answer={<>Yes, we have the capability to print the orders as per client’s requirements.
              (100 – 500,000 – up to any number).</>} />

            <FaqCom title={"What if my artwork has gradients?"} answer={"Gradients are handled with care so to get the desired results in printing. Firstly, there are a few initial quick sample sheets are printed to verify so to move towards the bulk run."} />
          </div>

        </div>




      </Container>

      {/**Frequently Asked Questions end*/}
      {/**Blogs Start*/}
      <Container>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px]  font-semibold text-center my-5'>Blog & News</h2>
        <Blog/>
      </Container>
      {/**Blogs End*/}


    </div>
  )
}

export default FAQ
