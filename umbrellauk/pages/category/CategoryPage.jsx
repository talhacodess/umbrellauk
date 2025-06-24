import React from 'react'
import Container from '../../components/Container'
import category from '../../src/assets/categoryimage.webp'
import Button from '../../components/Button'
import ProductsCategory from '../../components/products/ProductsCategory'
import Form from '../../components/multiForm/Form'


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
                <ProductsCategory/>
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
        <div className='text-center'>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Create Long-Lasting Brand Recognition by Having Perfectly <br /><span className='text-[#ff931e]'> Customizable apparel Boxes</span></h2>
           <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>In a highly competing apparel products market, customized apparel box packaging helps businesses stand out. It allows them to display their personalized branding and identity. This packaging also increases product protection during shipping and allows businesses to deliver important information about their products. It creates a memorable unboxing experience, builds brand loyalty, and encourages repeat purchases. Considering these all aspects of custom packaging, here’s how Umbrella Custom Packaging can make your custom-printed apparel packaging stand out in the industry.</p>
      {/**Video Section End */}
        </div>

      </Container>
        
    </>

  )
}

export default CategoryPage
