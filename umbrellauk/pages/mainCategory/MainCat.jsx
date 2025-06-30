import React from 'react'
import banner from '../../src/assets/cat.webp'
import Button from '../../components/Button'
import Container from '../../components/Container'
import ProductCard from '../../components/products/ProductCard'
function MainCat() {
  return (
    <>
    {/**First banner section Start */}
     <div className='bg-[#293453] sm:py-[70px] py-[40px] px-2.5'>
        <Container>
          <div className='grid sm:grid-cols-2 grid-co     vls-1 justify-between items-center'>
            <div className='flex flex-col justify-center items-start space-y-6'>
              <h1 className='sm:text-[64px] text-[30px] font-semibold sm:leading-[73px] leading-[35px] text-[#fff]'>Custom packaging, simplified.</h1>
              <p className='sm:text-[18px] text-[14px] leading-[24px] text-[#fff]'>Streamline your packaging workflow and deliver incredible unboxing experiences every single time.</p>
              <Button children={"Explore Products"} className='bg-[#ff931e] text-[#fff]' />

            </div>
            <div className='flex justify-end'><img src={banner} alt="banner-main" width={600} height={600} /></div>

          </div>

        </Container>
      </div>
        {/**First banner section end */}
        {/**Category section Start*/}

        <Container>
             <div className='text-center space-y-5 py-[50px]'>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Discover Our Custom Packaging Variety</h2>
          <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Check out all the different types of boxes we have at Umbrella Custom Packaging! We have special categories for boxes that you can customize just the way you like. You get to choose whether it’s the size, the material, or how it looks. So, have a look and pick the perfect box for you!</p>

        </div>
        </Container>
        <div className='bg-[#f3f3f3]'>
            <Container>
             {/** First Category */}
             <div className='py-5'>
                   <div className='grid sm:grid-cols-2 grid-cols-1 item-center gap-3.5 py-5'>
            <div className='flex '> <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Apparel and Fashion Boxes</h2></div>
            <div className='flex justify-end'><Button children={"View All Apparel Boxes"} className='text-white w-80'/></div>
           

        </div>
        <div>
            <ProductCard/>

        </div>

             </div>
              {/** First Category end */}
             {/** second Category */}
             <div className='py-5'>
                   <div className='grid sm:grid-cols-2 grid-cols-1 item-center gap-3.5 py-5'>
            <div className='flex '> <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Automotive Boxes</h2></div>
            <div className='flex justify-end'><Button children={"Automotive Boxes"} className='text-white w-80'/></div>
           

        </div>
        <div>
            <ProductCard/>

        </div>

             </div>
              {/** second Category end */}
             {/** third Category */}
             <div className='py-5'>
                   <div className='grid sm:grid-cols-2 grid-cols-1 item-center gap-3.5 py-5'>
            <div className='flex '> <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Bakery Boxes</h2></div>
            <div className='flex justify-end'><Button children={"Bakery Boxes"} className='text-white w-80'/></div>
           

        </div>
        <div>
            <ProductCard/>

        </div>

             </div>
              {/** third Category end */}
     
        </Container>
        </div>
        
         
        {/**Category section end*/}
    </>
  )
}

export default MainCat
