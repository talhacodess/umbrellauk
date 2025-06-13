import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import banner from '../../src/assets/banner.png'
import shipping from '../../src/assets/free-shipping.png'
import customer from '../../src/assets/customer-support-1.png'
import secured from '../../src/assets/securd-payment-1.png'
import money from '../../src/assets/money-back-gurantee-1.png'
import windowboxes from '../../src/assets/Window-Boxes.webp'
import infographics from '../../src/assets/infographics-uk-1.webp'
import '../../styles/Home.css'
import Form from '../../components/multiForm/Form'
import ProductCard from '../../components/products/ProductCard'

const categories = [
  {title:"Window Boxes",img:windowboxes},
  {title:"Window Boxes",img:windowboxes},
  {title:"Window Boxes",img:windowboxes},
  {title:"Window Boxes",img:windowboxes},
  {title:"Window Boxes",img:windowboxes},
  {title:"Window Boxes",img:windowboxes},
  {title:"Window Boxes",img:windowboxes},
  {title:"Window Boxes",img:windowboxes},
]



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
   {/**Icons banner End*/}
   {/**Categories section Start*/}
   <Container>
    <div className='text-center space-y-5 py-[50px]'>
       <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Discover Our Custom Packaging Variety</h2>
    <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Check out all the different types of boxes we have at Umbrella Custom Packaging! We have special categories for boxes that you can customize just the way you like. You get to choose whether it’s the size, the material, or how it looks. So, have a look and pick the perfect box for you!</p>

    </div>
    <div>
      <div className='grid sm:grid-cols-4 grid-cols-2 gap-3'>
        {categories.map((item,index)=>{
          return <div className='text-center space-y-3'>
            <img src={item.img} alt={item.title} className='rounded-[10px] shadow' />
            <p className='sm:text-[17px] text-[12px] font-semibold uppercase'>{item.title}</p>
          </div>
        })}

      </div>
    </div>
   

   </Container>
   {/**Categories section End*/}
   {/**Form section Start*/}
   <div className='bg-[#f3f3f3]'>
     <Container>
   

    <div className='text-center space-y-5 py-[50px]'>
       <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Get Instant Price Quote</h2>
    </div>
     <Form/>

   </Container>

   </div>
  
   {/**Form section End*/}
   {/**Products section Start*/}
    <div className='text-center space-y-5 py-[50px]'>
       <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Trending & Popular Products</h2>
    <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Explore Umbrella Custom Packaging’s wide variety of customizable boxes. Choose your ideal size, material, and design to create the perfect packaging solution.</p>
    <ProductCard/>

    </div>
   {/**Products section End*/}
   {/**How it works section sTART*/}
   <div className='bg-[#f3f3f3]'>

    <div className='grid grid-cols-2'>
      <div></div>
      <div><img src={infographics} alt="" width={560} height={670} /></div>

    </div>

   </div>

   {/**How it works section end*/}
   
  
 
   </>
  )
}

export default Home
