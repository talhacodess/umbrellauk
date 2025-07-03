import React from 'react'
import p1  from '../../src/assets/p-1.webp'
import p2  from '../../src/assets/p-2.webp'
import PortfolioCard from './PortfolioCard'
import p3 from '../../src/assets/p-3.webp'
import p4 from '../../src/assets/p-4.webp'
import p5 from '../../src/assets/p-5.webp'
import Container from '../../components/Container'

function Portfolio() {

    const portfolioData = [
        {img1:p1,img2:p2 },
        {img1:p3,img2:p3 },
        {img1:p4,img2:p5 },

        
    ]
  return (
   <>
   <Container>
      <div className='bg-[#293453] rounded-[8px] p-5 h-[230px] flex flex-col justify-center items-center space-y-5 m-2'>
        <h2 className='md:text-[43px] text-[30px] text-white font-semibold leading-10 text-center'>Our
        <span className='md:text-[43px] text-[30px] text-[#ff931e]'> Portfolio</span></h2>
        <p className='text-white text-[17px] capitalize text-center'>
        Our portfolio highlights a range of custom packaging solutions, designed to protect, promote, and enhance your products with style.
        </p>


        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5 m-2'>
            {portfolioData.map((data,index)=>{
                return <PortfolioCard img1={data.img1} img2={data.img2}/>
            })}

        </div>
   </Container>

      
        </>
      
      
   
  )
}

export default Portfolio
