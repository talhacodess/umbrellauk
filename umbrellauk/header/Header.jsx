import React from 'react'
import '../styles/Header.css'
import Container from '../components/Container'
import canada from '../src/assets/canada.svg'
import uk from '../src/assets/uk.svg'
import us from '../src/assets/us.svg'
import logo from '../src/assets/umbrella-logo.svg'
import { FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { SlCallOut } from "react-icons/sl";
import { RiMenu3Line } from "react-icons/ri";




function Header() {
  return (
    <>
    {/** top header Start */}
      <div className='border-b border-[#d9d9d987]'>
        
      <Container>
        <div className='grid sm:grid-cols-2 grid-cols-1 items-center justify-between gap-2'>
            <div className='flex gap-5 justify-center sm:justify-start'>
              <div className='flex gap-2 icon-flags group'><img src={uk} alt="Uk Flag" width={32} height={15} /><span className=' group-hover:text-[#ff931e] transition-colors duration-200'>UK</span></div>
              <div className='flex gap-2 icon-flags group'><img src={us} alt="USA flag" width={32} height={15} /><span className='group-hover:text-[#ff931e] transition-colors duration-200'>USA</span></div>
              <div className='flex gap-2 group'><img src={canada} alt="Canada Flag" width={32} height={15} /><span className='group-hover:text-[#ff931e] transition-colors duration-200'>CA</span></div>
            </div>
        
            <div className="flex gap-1 sm:justify-end  justify-center">
              <div className="bg-[#f3f3f3] p-2 rounded hover:text-[#ff931e] hover:scale-105 transform transition-transform duration-200">
                <FaInstagram />
              </div>
              <div className="bg-[#f3f3f3] p-2 rounded hover:text-[#ff931e] hover:scale-105 transform transition-transform duration-200">
                <FaXTwitter />
              </div>
              <div className="bg-[#f3f3f3] p-2 rounded hover:text-[#ff931e] hover:scale-105 transform transition-transform duration-200">
                <FaYoutube />
              </div>
              <div className="bg-[#f3f3f3] p-2 rounded hover:text-[#ff931e] hover:scale-105 transform transition-transform duration-200">
                <FaLinkedin />
              </div>
              <div className="bg-[#f3f3f3] p-2 rounded hover:text-[#ff931e] hover:scale-105 transform transition-transform duration-200">
                <FaPinterest />
              </div>
            </div>

         


        </div>

      </Container>
      
      </div>
    {/** top header End */}

    {/** middle header Start */}
    <Container>
      <div className='grid grid-cols-12 items-center justify-center gap-3'>
        <div className='lg:col-span-2 col-span-3 md:col-span-4'><img src={logo} width={135} height={70} alt="" /></div>
        <div className='lg:col-span-4 col-span-7 md:col-span-6'>
         
          <div className='border border-[#666] rounded-[8px] bg-[#f3f3f3] '>
            <input type="search" placeholder='Search All Content...' className='w-full h-[50px] p-1'  />
            </div>
          </div>
           {/** Display hide on mobile devices */}
        <div className='col-span-3 relative phone sm:hidden hidden lg:block'>
          <div className='flex justify-center items-center gap-5'>
            <div className='w-4/12 flex  justify-end'>< SlCallOut size={35}/></div>
            <div className='w-8/12'>
            <span className='text-[14px] text-[#2e2e2d] font-normal'>Talk to our packaging expert</span>
            <p className='text-[#293453] text-[18px] font-semibold'>0800-358-5325</p>
             </div>

          </div>
          </div>
           {/** Display hide on mobile devices */}
        <div className='col-span-3 relative email sm:hidden hidden  lg:block'>
            <div className='flex justify-center items-center gap-5'>
         
            <span className='text-[14px] text-[#2e2e2d] font-normal'>sales@umbrellapackaging.co.uk</span>
            

          </div>
          </div>
          {/** menu for mobile devices */}
             <div className='col-span-2   flex justify-between block sm:hidden md:block lg:hidden'>

             <RiMenu3Line size={30}/>
           
          </div>

       

      </div>

    </Container>
    {/** middle header End */}
      
      </>

  
  )
}

export default Header
