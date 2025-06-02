import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import banner from '../../src/assets/banner.png'
import shipping from '../../src/assets/free-shipping.png'
import '../../styles/Home.css'



function Home() {
  return (
   <>
   {/**Banner Section Start */}
   <div className='bg-[#293453] sm:py-[70px] py-[40px] px-2.5'>
     <Container>
    <div className='grid sm:grid-cols-2 grid-co     vls-1 justify-between items-center'>
        <div className='flex flex-col justify-center items-start space-y-6'>
            <h1 className='sm:text-[64px] text-[30px] font-semibold sm:leading-[73px] leading-[35px] text-[#fff]'>Custom packaging, simplified.</h1>
            <p className='sm:text-[18px] text-[14px] leading-[24px] text-[#fff]'>Streamline your packaging workflow and deliver incredible unboxing experiences every single time.</p>
            <Button children={"Explore Products"} className='bg-[#ff931e] text-[#fff]'/>
            
        </div>
        <div className='flex justify-end'><img src={banner} alt="banner-main" className='w-full' /></div>

    </div>

   </Container>
   </div>
   {/**Banner Section End */}
   {/**Icons banner Start */}
   <div className='bg-[#f3f3f3]'>

    <Container>
        <div className='grid sm:grid-cols-4 p-2 grid-cols-2 gap-1'>
            <div className=' relative icon-banner '>
                      <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                        <div className='w-4/12 flex justify-center sm:justify-end'><img src={shipping} width={60} height={45} alt="" /></div>
                        <div className='w-8/12'>
                        <span className='text-[#293453]  sm:text-[12px] md:text-[15px] text-[18px] font-semibold'>Free Shipping & Return</span>
                        <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>Free shipping on orders over $99</p>
                         </div>
            
                      </div>
                      </div>
          
            </div> 

        </Container>    

   </div>
   {/**Icons banner End*/}
   
  
 
   </>
  )
}

export default Home
