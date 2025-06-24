import React from 'react'
import Container from '../../components/Container'
import category from '../../src/assets/categoryimage.webp'
import infographics from '../../src/assets/infographics-uk-1.webp'
import wicon1 from '../../src/assets/w-icon.png'
import wicon2 from '../../src/assets/w-icon2.png'
import wicon3 from '../../src/assets/w-icon3.png'
import wicon4 from '../../src/assets/w-icon4.png'
import wicon5 from '../../src/assets/w-icon5.png'
import wicon6 from '../../src/assets/w-icon6.png'
import lastbanner from '../../src/assets/lastimage.png'
import one from '../../src/assets/one.png'
import two from '../../src/assets/2.svg'
import three from '../../src/assets/3.svg'
import four from '../../src/assets/4.svg'
import five from '../../src/assets/6.png'
import Button from '../../components/Button'
import ProductsCategory from '../../components/products/ProductsCategory'
import Form from '../../components/multiForm/Form'
import MaterialTabs from '../../components/MaterialTabs'
import SimpleSteps from '../../components/SimpleSteps'
import Blogs from '../../components/blog/Blogs'
import ReactPlayer from 'react-player'
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import '../category/Category.css'



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
                <Button children={"Get Instant Quote"} className='text-white  hover:text-[#ff931e] transition-all' />
                <Button children={"Get Template"} className='text-white  hover:text-[#ff931e] transition-all' />
                <Button children={"Beat My Quote"} className='text-white  hover:text-[#ff931e] transition-all' />
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

          <div className=' sm:col-span-3 col-span-12 '>

            <div className=' flex flex-col justify-center items-center  bg-[#f3f3f3] rounded-lg p-4 sticky top-3 '>
              <h6 className='text-2xl font-semibold'>Get an Instant Quote</h6>
              <form action="">
                <div className=''>
                  <label htmlFor="" className='text-[16px]'>Name</label>
                  <input
                    type="text"
                    className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '


                    placeholder='Name'
                  />
                </div>
                <div className='' >
                  <label htmlFor="" className='text-[16px]'>Email</label>
                  <input
                    type="email"
                    className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                    placeholder='Email'
                  />
                </div>
                <div className=''>
                  <label htmlFor="" className='text-[16px]'>Phone Number</label>
                  <input
                    type="tel"
                    className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                    placeholder='Phone Number'
                  />
                </div>
                <div className=''>
                  <label htmlFor="" className=' text-[16px]'>Description</label>
                  <textarea
                    rows={3}
                    className='w-full rounded-[8px]  border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'></textarea>
                </div>
                <div className="">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer inline-block bg-[#293453] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-[#ff931e] transition-colors"
                  >
                    Choose File
                  </label>

                  <span id="file-name" className="text-sm text-gray-600">
                    No file chosen
                  </span>

                  <input
                    id="file-upload"
                    type="file"
                    accept=".png,.pdf,.jpg,.jpeg,.webp"
                    className="hidden"
                    onChange={(e) => {
                      const fileName = e.target.files[0]?.name || "No file chosen";
                      document.getElementById("file-name").textContent = fileName;
                    }}
                  />
                </div>

                <div className='my-4'>
                  <Button type='submit' children={"Submit"} className='w-full text-white hover:text-[#ff931e]' />
                </div>
              </form>
            </div>


          </div>
          <div className='sm:col-span-9 col-span-12'>

            <div className='text-center py-4 space-y-2.5'>
              <h3 className='sm:text-4xl text-xl font-semibold'>Find a Variety of Window Boxes​ Below​</h3>
              <p className='sm:text-lg text-sm  leading-[25px] font-normal text-[#7a7a7a]'>Following are the Window Boxes​ offered at Umbrella Custom Packaging.</p>
              <div>
                <ProductsCategory />
              </div>

            </div>

          </div>


        </div>
      </Container>
      {/**Product Category End */}
      {/**Form Category Start */}

      <div className='bg-[#f3f3f3]'>
        <Container>


          <div className='text-center space-y-5 py-[50px]'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Get Instant Price Quote</h2>
          </div>
          <Form />

        </Container>

      </div>

      {/**Form Category End */}
      {/**Video Section Start */}
      <Container>
        <div className='text-center mb-10'>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Create Long-Lasting Brand Recognition by Having Perfectly <br /><span className='text-[#ff931e]'> Customizable apparel Boxes</span></h2>
          <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>In a highly competing apparel products market, customized apparel box packaging helps businesses stand out. It allows them to display their personalized branding and identity. This packaging also increases product protection during shipping and allows businesses to deliver important information about their products. It creates a memorable unboxing experience, builds brand loyalty, and encourages repeat purchases. Considering these all aspects of custom packaging, here’s how Umbrella Custom Packaging can make your custom-printed apparel packaging stand out in the industry.</p>


        </div>



        <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-5'>

          <div className='flex justify-end items-center'>
            <ReactPlayer url={"https://youtu.be/CTx45p9_T80"} controls={false} width={550}  />

          </div>
          <div className='space-y-4'>
            <h2 className='md:text-3xl text-lg font-semibold text-start  '>Create Long-Lasting Brand Recognition by Having Perfectly Customizable Window Boxes</h2>
            <p className='text-[#333333] md:text-lg text-sm text-left'>Umbrella Custom Packaging offers customized apparel box packaging and printing solutions for all your apparel products. We have technologically advanced digital and offset presses. It makes sure that every apparel box we print has high quality. Our skilled staff enables us to present perfect printed designs and styles. For custom quotes or inquiries, feel free to contact our representatives from Monday-Friday.</p>
            <div className='grid  grid-cols-1'>
              <div >
                <h6 className='text-xl font-semibold'>Contact Us</h6>
                <div className='flex space-x-2 items-center mt-3'><IoMdCall size={22} /><span className='text-[16px]'>Dial: 0800-358-5325</span></div>
                <div className='flex space-x-2 items-center mt-2 '><FaWhatsapp size={22} /><span className='text-[16px]'>WhatsApp :0800-358-5325</span></div>
                <div className='flex space-x-2 items-center mt-2'><MdOutlineEmail size={22} /><span className='text-[16px]'>Send Email To: sales@umbrellapackaging.co.uk</span></div>
                <div className='flex space-x-2 items-center mt-2 '><PiMicrosoftTeamsLogoFill size={22} /><span className='text-[16px]'>Skype 0800-358-5325</span></div>
               
            
              </div>

            </div>
          </div>

        </div>




      </Container>
      {/**Video Section End */}
      {/**First banner Start */}
        <div className='bg-[#f7f7f7] py-5 '>
        <Container>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5'>
            <div className='flex flex-col space-y-4'>
              <h3 className='text-4xl font-semibold'>How would one define Window Boxes?​</h3>
              <div className='max-h-[300px] overflow-y-auto p-5'>
                 <p className='sm:text-[17px] text-sm  leading-[25px] font-normal text-[#7a7a7a]'> Firstly, let’s focus on custom Window packaging boxes, what are they? We use these special boxes to protect and carry your products, from one place to another. Unlike standard boxes, they are customizable, considering factors like size, shape, material, and printing to fully fit the product they hold. All in all, custom-printed Window boxes with logos play an important role in product presentation and protection. It allows the brand to display its unique identity and branding.Moreover, personalized Window boxes create an unforgettable unboxing experience, promoting brand loyalty which inspires repeat purchases in e-commerce. A well-designed and customized Window packaging plan can help the brand stand out in the market. So, here is a chance to think about a custom Window box that should be well-designed, precisely sized, and perfectly shaped. It will take your business to new heights. Overall, whatever you are thinking, take your chance, nothing is out of our reach.</p>

              </div>
             
              <div className='space-x-2 space-y-2 hidden sm:block p-5'>
                <Button children={"Get Instant Quote"} className='text-white  hover:text-[#ff931e] transition-all' />
                
              </div>
            </div>
            <div className='flex justify-center'>
              <img src={category} width={500} height={400} className='rounded-lg object-cover' alt="" />
            </div>
          </div>
        </Container>
      </div>
      {/**First Banner End */}
      {/**Category how it works Start */}
      <div className=' my-5 py-2'>
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
      {/**Category How it works End */}
      {/**second banner Start */}
     <div className='bg-[#f3f3f3]'>
       <Container>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5'>
             <div className='flex justify-center'>
              <img src={category} width={500} height={400} className='rounded-lg object-cover' alt="" />
            </div>
            <div className='flex flex-col space-y-4'>
              
              <h3 className='text-4xl font-semibold'>How would one define Window Boxes?​</h3>
              <div className='max-h-[300px] overflow-y-auto p-5'>
                 <p className='sm:text-[17px] text-sm  leading-[25px] font-normal text-[#7a7a7a]'> Firstly, let’s focus on custom Window packaging boxes, what are they? We use these special boxes to protect and carry your products, from one place to another. Unlike standard boxes, they are customizable, considering factors like size, shape, material, and printing to fully fit the product they hold. All in all, custom-printed Window boxes with logos play an important role in product presentation and protection. It allows the brand to display its unique identity and branding.Moreover, personalized Window boxes create an unforgettable unboxing experience, promoting brand loyalty which inspires repeat purchases in e-commerce. A well-designed and customized Window packaging plan can help the brand stand out in the market. So, here is a chance to think about a custom Window box that should be well-designed, precisely sized, and perfectly shaped. It will take your business to new heights. Overall, whatever you are thinking, take your chance, nothing is out of our reach.</p>

              </div>
             
              <div className='space-x-2 space-y-2 hidden sm:block p-5'>
                <Button children={"Get Instant Quote"} className='text-white  hover:text-[#ff931e] transition-all' />
                
              </div>
            </div>
           
          </div>
        </Container>

        
     </div>
       
   {/**second banner End */}

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

       {/**Third banner Start */}
     <div className='bg-[#f3f3f3]'>
       <Container>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5'>
            
            <div className='flex flex-col space-y-4'>
              
              <h3 className='text-4xl font-semibold'>How would one define Window Boxes?​</h3>
              <div className='max-h-[300px] overflow-y-auto p-5'>
                 <p className='sm:text-[17px] text-sm  leading-[25px] font-normal text-[#7a7a7a]'> Firstly, let’s focus on custom Window packaging boxes, what are they? We use these special boxes to protect and carry your products, from one place to another. Unlike standard boxes, they are customizable, considering factors like size, shape, material, and printing to fully fit the product they hold. All in all, custom-printed Window boxes with logos play an important role in product presentation and protection. It allows the brand to display its unique identity and branding.Moreover, personalized Window boxes create an unforgettable unboxing experience, promoting brand loyalty which inspires repeat purchases in e-commerce. A well-designed and customized Window packaging plan can help the brand stand out in the market. So, here is a chance to think about a custom Window box that should be well-designed, precisely sized, and perfectly shaped. It will take your business to new heights. Overall, whatever you are thinking, take your chance, nothing is out of our reach.</p>

              </div>
             
              <div className='space-x-2 space-y-2 hidden sm:block p-5'>
                <Button children={"Get Instant Quote"} className='text-white  hover:text-[#ff931e] transition-all' />
                
              </div>
            </div>

             <div className='flex justify-center'>
              <img src={category} width={500} height={400} className='rounded-lg object-cover' alt="" />
            </div>
           
          </div>
        </Container>

        
     </div>
       
   {/**Third banner End */}

    {/**Simple Steps Start*/}
      
        <Container>
          <div className='text-center space-y-5 py-[50px]'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Simple Steps to get the Custom Packaging Produced</h2>
            <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Give our new and creative Following are few steps which provide the complete Guide.</p>

          </div>
          <SimpleSteps />
        </Container>

      {/**Simple Steps end*/}
 {/**fourth banner Start */}
     <div className='bg-[#f3f3f3]'>
       <Container>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5'>
              <div className='flex justify-center'>
              <img src={category} width={500} height={400} className='rounded-lg object-cover' alt="" />
            </div>
            
            <div className='flex flex-col space-y-4'>
              
              <h3 className='text-4xl font-semibold'>How would one define Window Boxes?​</h3>
              <div className='max-h-[300px] overflow-y-auto p-5'>
                 <p className='sm:text-[17px] text-sm  leading-[25px] font-normal text-[#7a7a7a]'> Firstly, let’s focus on custom Window packaging boxes, what are they? We use these special boxes to protect and carry your products, from one place to another. Unlike standard boxes, they are customizable, considering factors like size, shape, material, and printing to fully fit the product they hold. All in all, custom-printed Window boxes with logos play an important role in product presentation and protection. It allows the brand to display its unique identity and branding.Moreover, personalized Window boxes create an unforgettable unboxing experience, promoting brand loyalty which inspires repeat purchases in e-commerce. A well-designed and customized Window packaging plan can help the brand stand out in the market. So, here is a chance to think about a custom Window box that should be well-designed, precisely sized, and perfectly shaped. It will take your business to new heights. Overall, whatever you are thinking, take your chance, nothing is out of our reach.</p>

              </div>
             
              <div className='space-x-2 space-y-2 hidden sm:block p-5'>
                <Button children={"Get Instant Quote"} className='text-white  hover:text-[#ff931e] transition-all' />
                
              </div>
            </div>

           
           
          </div>
        </Container>

        
     </div>
       
   {/**Fourth banner End */}
   {/**Looking for the templates Start */}
   <div className='bg-[#ffdebf] py-10 mt'>
    <Container>
      <div className='grid grid-cols-12'>
        <div className='col-span-10 space-y-5'>

           <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Looking for the templates of custom boxes and packaging ?</h2>
            <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#2e2e2e]'>Get a quick template file from us, where you can put your design and save some good time.</p>
          

        </div>
        <div className='col-span-2'>
           
        
                <Button children={"Get Template"} className='text-white  hover:text-[#ff931e] transition-all' />
                
           
        </div>
      </div>

    </Container>
   </div>
   {/**Looking for the templates End */}
   {/**Building Trust with Top Brands Start*/}
   <div className='lastbanner '>
    <Container>
              <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5 justify-center items-center bg-[#ffffffe4]' >
              <div className='flex justify-center'>
              <img src={lastbanner} width={500} height={400} className='rounded-lg object-cover' alt="" />
            </div>
            
            <div className='flex flex-col space-y-4'>
              
              <h3 className='text-4xl font-semibold'>Building Trust with Top Brands​</h3>
             
                 <p className='sm:text-[17px] text-sm  leading-[25px] font-normal text-[#020202]'>Many companies choose Umbrella Custom Packaging for amazing, affordable, and memorable custom printed boxes and packaging. We work hard to make sure we give them the best advice and solutions for their needs, so they feel confident and happy working with us. It doesn’t matter how big or small your business is, we’ll work with you to make the perfect custom boxes you want. By building trust with top brands through our dedication, reliability, and exceptional service, we continue to solidify our reputation as a trusted partner in the packaging industry.</p>
                 <div className='grid grid-cols-5 gap-5 '>
                  <div className=' shadow flex items-center justify-center rounded-2xl group'><img src={one} alt="" className='animate-bounce' /></div>
                  <div className=' shadow flex items-center justify-center rounded-2xl'><img src={two} alt="" className='animate-bounce'/></div>
                  <div className=' shadow flex items-center justify-center rounded-2xl'><img src={three} alt="" className='animate-bounce' /></div>
                  <div className=' shadow flex items-center justify-center rounded-2xl'><img src={four} alt=""  className='animate-bounce'/></div>
                  <div className=' shadow flex items-center justify-center rounded-2xl'><img src={five} alt="" className='animate-bounce' /></div>
                  

                 </div>

             
             
            </div>

           
           
          </div>

    </Container>
   </div>
   {/**Building Trust with Top Brands End */}
     {/**Blog Start*/}
      <Container>
        <div className='space-y-5'>
           <h2 className='md:text-[35px] text-lg font-semibold  uppercase leading-9 text-center '>Blog & News</h2>
           <Blogs/>
        </div>
      </Container>
      {/**Blog end*/}

    </>

  )
}

export default CategoryPage
