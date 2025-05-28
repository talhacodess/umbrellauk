import React from 'react'
import '../styles/Header.css'
import Container from '../components/Container'
import canada from '../src/assets/canada.svg'
import uk from '../src/assets/uk.svg'
import us from '../src/assets/us.svg'
import { FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'



function Header() {
  return (
    <div>
        <Container>
          <div className='flex w-full align-items-center justify-between '>
            <div className=' w-6/12'>
            <div className='flex gap-5'>
              <div className='flex gap-2 icon-flags'><img src={uk} alt="Uk Flag" width={32} height={15} /><span>UK</span></div>
              <div className='flex gap-2 icon-flags'><img src={us} alt="USA flag" width={32} height={15} /><span>USA</span></div>
              <div className='flex gap-2'><img src={canada} alt="Canada Flag" width={32} height={15} /><span>CA</span></div>
            </div>
            </div>
            <div className=' w-6/12 '>
            <div className='flex   gap-1 '>
              <div className=' bg-[#f3f3f3] p-2 '><FaFacebook /></div>
              <div className=' bg-[#f3f3f3] p-2 '><FaInstagram /></div>
              <div className=' bg-[#f3f3f3] p-2 '><FaXTwitter /></div>
              <div className=' bg-[#f3f3f3] p-2 '><FaYoutube /></div>
              <div className=' bg-[#f3f3f3] p-2 '><FaLinkedin /></div>
              <div className=' bg-[#f3f3f3] p-2 '><FaPinterest /></div>
            </div>
            </div>


          </div>
            
        </Container>
      
    </div>
  )
}

export default Header
