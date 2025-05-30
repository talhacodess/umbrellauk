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
import { Link } from 'react-router';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import icon1 from '../src/assets/Automotive-Boxes.webp'






function Header() {
    const [megaOne,setMegaOne] = useState()
   const [open,setOpen] = useState(false)
  const [openIcon,setOpenIcon] =useState(null)
  const categories = [
      {
        key:1,
        category : "Box By Industry",
        menu:[
          {title: 'Automotive Boxes', icon:icon1},
          {title: 'Apparel Boxes', icon:icon1},
          {title: 'Beverage Boxes', icon:icon1},
          {title: 'Bakery Boxes', icon:icon1},
          {title: 'Candy Boxes', icon:icon1},
          {title: 'Candle Boxes', icon:icon1},
          {title: 'Cosmetic Boxes', icon:icon1},
          {title: 'Coffee Boxes', icon:icon1},
          {title: 'Insert Packaging', icon:icon1},
          {title: 'Styles Boxes', icon:icon1},
          {title: 'Retail Packaing', icon:icon1},
          {title: 'Coffee Beans', icon:icon1},
          {title: 'Apparrl', icon:icon1},
        ]
      },
      { 
        key:2,
        category : "Material",
        menu:[
          {title: 'Auto Lock Boxes', icon:icon1},
          {title: 'Burger Boxes', icon:icon1},
          {title: 'Bookend Boxes', icon:icon1},
          {title: 'Bakery Boxes', icon:icon1},
          {title: 'Candy Boxes', icon:icon1},
          {title: 'Candle Boxes', icon:icon1},
          {title: 'Cosmetic Boxes', icon:icon1},
          {title: 'Coffee Boxes', icon:icon1},
        ]
      },
      {
        key:3,
        category : "shapes & Styles",
        menu:[
          {title: 'Automotive Boxes', icon:icon1},
          {title: 'Apparel Boxes', icon:icon1},
          {title: 'Beverage Boxes', icon:icon1},
          {title: 'Bakery Boxes', icon:icon1},
          {title: 'Candy Boxes', icon:icon1},
          {title: 'Candle Boxes', icon:icon1},
          {title: 'Cosmetic Boxes', icon:icon1},
          {title: 'Coffee Boxes', icon:icon1},
        ]
      },
      {
        key:4,
        category : "Sticker Labels & Others",
        menu:[
          {title: 'Automotive Boxes', icon:icon1},
          {title: 'Apparel Boxes', icon:icon1},
          {title: 'Beverage Boxes', icon:icon1},
          {title: 'Bakery Boxes', icon:icon1},
          {title: 'Candy Boxes', icon:icon1},
          {title: 'Candle Boxes', icon:icon1},
          {title: 'Cosmetic Boxes', icon:icon1},
          {title: 'Coffee Boxes', icon:icon1},
        ]
      },
    ]
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

    <Container>

      <div className='flex justify-center items-center'>
          <div className='w-3/12'>
      <Link to={"/"}> <img src="{Logo}" width={130} height={70} alt="" /></Link>
       </div>
       <div className='w-6/12 flex justify-center'>
       <input placeholder='Search For Products' className='border-2 border-[#dddddd] rounded-[60px] md:w-[300px] h-[50px] p-2 bg-[#fff] w-[150px] lg:w-[400px] '/>
       </div>
       <div className='w-3/12 flex justify-center items-center space-x-2'>
       
       <div className='space-x-5 '>
       <div className='md:block lg:hidden block menu-triger'onClick={()=>{setOpen(!open)}}> {open?<IoCloseSharp size={25}/>:<GiHamburgerMenu  size={25} />} </div>
        <div className='space-x-5 md:hidden lg:block hidden'>
          {/* <Button children={'Reviews'} className='bg-white border-1' textColor='text-black' />
        <Button children={'Get Quote'} /> */}
        </div>
       
       
      </div>
       </div>
      </div>

    </Container>
      
      </>

  
  )
}

export default Header
