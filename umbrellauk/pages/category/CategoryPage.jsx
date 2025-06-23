import React from 'react'
import Container from '../../components/Container'
import category from '../../src/assets/categoryimage.webp'
import Button from '../../components/Button'

function CategoryPage() {
  return (
    <>
    {/**Category banner Start */}
    <div className='bg-[#f7f7f7] py-5 '>
        <Container>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5'>
                <div className='flex flex-col space-y-4'>
                    <p className='text-[#293453] text-sm'>Home / Shapes & Styles / <span className='text-[#ADAAAA]'>Window Boxes</span>​</p>
                    <h3 className='text-4xl font-semibold'>Window Boxes​</h3>
                       <p className='sm:text-[17px] text-sm  leading-[25px] font-normal text-[#7a7a7a]'>If you are thinking about custom Window packaging boxes for your products, it means you have understood that personalized Window boxes could make your product look extra special. Custom Window box packaging can make your product feel more attractive and valuable, catching customers’ attention and increasing their understanding of its quality and value. From concept to completion, our custom packaging experts will guide you through every step of the process. They will help you to find the exact size, style, and material making your custom Window boxes’ first impression memorable which leaves a lasting impact.</p>

                       <div className='space-x-2 space-y-2 hidden sm:block'>
                        <Button children={"Get Instant Quote"} className='text-white  hover:text-[#ff931e] transition-all'/>
                        <Button children={"Get Template"} className='text-white  hover:text-[#ff931e] transition-all'/>
                        <Button children={"Beat My Quote"} className='text-white  hover:text-[#ff931e] transition-all'/>
                       </div>
                </div>
                <div className='flex justify-center'>
                  <img src={category} width={500} height={400} className='rounded-lg object-cover' alt="" />
                  </div>
            </div>
        </Container>
    </div>
     {/**Category banner End */}
     {/**Product Category Start */}
     <Container>
      <div className='grid grid-cols-12'>

        <div className=' col-span-4 bg-amber-100'>
          
          
           </div>
        <div className='col-span-8 bg-amber-400'>Products </div>

      
      </div>
     </Container>
     {/**Product Category End */}
    </>
 
  )
}

export default CategoryPage
