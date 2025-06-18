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
import wicon1 from '../../src/assets/w-icon.png'
import wicon2 from '../../src/assets/w-icon2.png'
import wicon3 from '../../src/assets/w-icon3.png'
import wicon4 from '../../src/assets/w-icon4.png'
import wicon5 from '../../src/assets/w-icon5.png'
import wicon6 from '../../src/assets/w-icon6.png'
import gallery1 from '../../src/assets/gallery1.webp'
import gallery2 from '../../src/assets/gallery2.webp'
import gallery3 from '../../src/assets/gallery3.webp'
import gallery4 from '../../src/assets/gallery4.webp'
import gallery5 from '../../src/assets/gallery5.webp'
import gallery6 from '../../src/assets/gallery6.webp'
import gallery7 from '../../src/assets/gallery7.webp'
import gallery8 from '../../src/assets/gallery8.webp'
import gallery9 from '../../src/assets/gallery9.webp'
import strandard from '../../src/assets/standards-banner.webp'    
import '../../styles/Home.css'
import Form from '../../components/multiForm/Form'
import ProductCard from '../../components/products/ProductCard'
import MaterialTabs from '../../components/MaterialTabs'
import { FaCircleNotch } from "react-icons/fa";
import { TbHandFingerRight } from "react-icons/tb";
import ProductPresentation from '../../components/ProductPresentation'
import TemplateSlider from '../../components/TemplateSlider'
import ProductionUnits from '../../components/ProductionUnits'
import InspirationGallery from '../../components/InspirationGallery'

const categories = [
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
]

const galleryImages = [
  
  
{img:gallery2},
  {img:gallery1},
  
  {img:gallery3},
   {img:gallery5},
   {img:gallery8},
     {img:gallery6},
   {img:gallery9},
    {img:gallery7},
  
  {img:gallery4},
 

 
  
  
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
              <Button children={"Explore Products"} className='bg-[#ff931e] text-[#fff]' />

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
            {categories.map((item, index) => {
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
          <Form />

        </Container>

      </div>

      {/**Form section End*/}
      {/**Products section Start*/}
      <div className='text-center space-y-5 py-[50px]'>
        <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Trending & Popular Products</h2>
        <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Explore Umbrella Custom Packaging’s wide variety of customizable boxes. Choose your ideal size, material, and design to create the perfect packaging solution.</p>
        <ProductCard />

      </div>
      {/**Products section End*/}
      {/**How it works section sTART*/}


      <div className='bg-[#f3f3f3] my-5 py-2'>
        <Container>
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center'>
            <div className=''>
              <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>How it works</h2>
              <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mt-5'>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon1} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>No Die & Plate Charges</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon2} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>No Minimum Order Qty</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon3} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Free Design</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon4} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Quickest Turnaround</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon5} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Cheapest Prices</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon6} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Free Shipping</h3>
                </div>

              </div>

            </div>
            <div className='flex justify-center items-center'><img src={infographics} alt="" width={560} height={670} /></div>

          </div>

        </Container>



      </div>

      {/**How it works section end*/}
      {/**Material Guide Start*/}
      <Container>
        <div className='text-center space-y-5 py-[50px]'>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Custom Box Material Guide: Finding the Perfect Fit</h2>
          <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Let’s explore the Types of Materials for Your Unique Packaging.</p>

          {/** Material tabs */}
          <MaterialTabs />

        </div>

      </Container>
      {/**Material Guide end*/}
      {/**We Fulfil the standards Start*/}
      <div className='standard-bg'>
        <Container>
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-5'>

            <div className='flex justify-end items-center'>
              <img src={strandard} width={470} height={270} alt="" className='rounded-lg' />

            </div>
            <div className='space-y-4'>
              <h2 className='md:text-[35px] text-lg font-extrabold text-start uppercase leading-9 '><span className='text-[#FF931E]'>We Fulfil the standards</span> of the Packaging Industry.</h2>
              <p className='text-[#333333] md:text-lg text-sm text-left'>Umbrella Custom Packaging follows strict standards, much like a recipe, ensuring each box is the right size, crafted from top-quality materials, and designed to perfection. With attention to detail and quality control, they deliver custom boxes that are both reliable and customized to your preferences.</p>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-5  '>
                <div >
                  <div className='flex space-x-2 items-center mt-10'><FaCircleNotch /><span className='text-[16px]'>Select/provide the Box style</span></div>
                  <div className='flex space-x-2 items-center '> <FaCircleNotch /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                </div>
                <div>
                  <div className='flex space-x-2 items-center mt-10'><FaCircleNotch /><span className='text-[16px]'>Select/provide the Box style</span></div>
                  <div className='flex space-x-2 items-center '> <FaCircleNotch /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
                  <div className='flex space-x-2 items-center group '><FaCircleNotch className=' group-hover:scale-125' /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                </div>
              </div>
            </div>

          </div>

        </Container>


      </div>
      {/**We Fulfil the standards  end*/}
      {/**Product Presentation Start*/}
      <div className='bg-[#f3f3f3]'>
        <Container>
          <div className='text-center space-y-5 py-[50px]'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Enhance Your Product Presentation with Our Special Packaging Features</h2>
            <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Give our new and creative packaging a try for your stuff! We’ve come up with cool add-ons options like embossing, debossing, silver and gold foiling, spot UV and holographic to make your products look awesome. It’s like dressing up your things in a special way. Just see how it makes your stuff stand out! Try it, and you’ll love how great your products can look!</p>

            <ProductPresentation />

          </div>
        </Container>

      </div>


      {/**Product Presentation end*/}
      {/**Box Template start*/}
      <Container>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 my-5'>
          <div>
            <TemplateSlider />
          </div>
          <div className='flex flex-col items-start justify-center space-y-5'>
            <h2 className='md:text-[36px] text-[25px] font-semibold  '>Need Box Template to design?</h2>
            <p className='text-[#333333] md:text-lg text-sm text-left'>Get a quick template file from us, where you can put your design and save some good time. You can also send us the artwork to input in a template and send it your way for your vision.<br />
              Making boxes just the right size, building creative structure, or enhance functionality is simple. Just Provide Following Information.</p>
            <div className='flex space-x-1 items-center mt-10'><TbHandFingerRight size={20} /><span className='text-[16px]'>Select/provide the Box style</span></div>
            <div className='flex space-x-1 items-center '><TbHandFingerRight size={20} /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
            <div className='flex space-x-1 items-center '><TbHandFingerRight size={20} /><span className='text-[16px]'>Share your additional thoughts</span></div>
          </div>


        </div>
      </Container>

      {/**Box Template end*/}
      {/**Production Units Start*/}
      <div className='bg-[#f7f7f7]'>
        <Container>
          <ProductionUnits />

        </Container>


      </div>
      {/**Production Units end*/}
      {/**Inspiration Start*/}
      <Container>
        <InspirationGallery galleryImages={galleryImages} />

      </Container>
      {/**Inspiration end*/}





    </>
  )
}

export default Home
