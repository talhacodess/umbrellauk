import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import banner from '../../src/assets/banner.png'



function Home() {
  return (
   <>
   <div className='bg-[#293453] sm:py-[70px] py-[40px]'>
     <Container>
    <div className='grid sm:grid-cols-2 grid-cols-1 justify-between items-center'>
        <div className='flex flex-col justify-center items-start space-y-6'>
            <h1 className='sm:text-[64px] text-[30px] font-semibold sm:leading-[73px] leading-[35px] text-[#fff]'>Custom packaging, simplified.</h1>
            <p className='sm:text-[18px] text-[14px] leading-[24px] text-[#fff]'>Streamline your packaging workflow and deliver incredible unboxing experiences every single time.</p>
            <Button children={"Explore Products"} className='bg-[#ff931e] text-[#fff]'/>
            
        </div>
        <div className='flex justify-end'><img src={banner} alt="banner-main" className='w-full' /></div>

    </div>

   </Container>
   </div>
  
 
   </>
  )
}

export default Home
