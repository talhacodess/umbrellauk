import React, { useEffect, useState } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import Button from '../../components/Button';
import Container from '../../components/Container'
import TabsProduct from './TabsProduct';
import SimpleSteps from '../../components/SimpleSteps';
import infographics from '../../src/assets/infographics-uk-1.webp'
import wicon1 from '../../src/assets/w-icon.png'
import wicon2 from '../../src/assets/w-icon2.png'
import wicon3 from '../../src/assets/w-icon3.png'
import wicon4 from '../../src/assets/w-icon4.png'
import wicon5 from '../../src/assets/w-icon5.png'
import wicon6 from '../../src/assets/w-icon6.png'
import category from '../../src/assets/categoryimage.webp'
import { data, useParams } from 'react-router-dom';

import ProductCard from '../../components/products/ProductCard';
import axios from 'axios';

function SingleProduct() {
    const [images, setImages] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`)
        .then((response => setImages(response.data)))
        .catch(error => console.error("Error fetching product images:", error))
    },[]);
    const [activeImage, setActiveImage] = useState(images.img)
    return (
        <>
            {/**First Section*/}
            <div className='bg-[#f7f7f7]'>
                <Container>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center' >
                        <div className=''>
                            <div className='flex flex-col gap-5'>
                                <img src={images.img} alt="" className='w-full h-full aspect-square object-cover rounded-[8px]' />

                                <div className='flex flex-row  justify-center  h-24 flex-wrap gap-5 space-x-5'>
                                    <img src={images.img1} alt="" className='w-35 h-35 rounded-[8px]' onClick={() => setActiveImage(images.img1)} />
                                    <img src={images.img2} alt="" className='w-35 h-35 rounded-[8px]' onClick={() => setActiveImage(images.img2)} />
                                    <img src={images.img3} alt="" className='w-35 h-35 rounded-[8px]' onClick={() => setActiveImage(images.img3)} />
                                    <img src={images.img4} alt="" className='w-35 h-35 rounded-[8px]' onClick={() => setActiveImage(images.img4)} />


                                </div>
                            </div>

                        </div>
                        <div className=''>
                            <div className='space-y-4'>
                                <h2 className='text-4xl font-semibold'>{images.title}</h2>
                                <div className='flex space-x-1.5  items-center'>{[...Array(5)].map((_, i) => (
                                    <IoStar key={i} color='orange' />
                                ))} <span className='font-medium text-sm'>View All Review</span></div>
                                <h6 className='text-sm'>Home / Box By Industry / Apparel and Fashion Boxes / Apparel Gift Boxes </h6>
                                <p className='sm:text-lg font-medium  text-[#2e2e2e] leading-6'>Upgrade your brand with our custom soap boxes! Our lightweight, high-quality packaging is fully customizable to help your soap stand out and make a lasting impression on your customers. Enjoy fast turnaround times, free design help from our packaging experts, and great prices. We’re sure you’ll be thrilled with the results, just like your customers will be!</p>

                            </div>


                            <div className=' flex flex-col bg-white rounded-lg p-5 shadow mt-3'>
                                <form action="">
                                    <div className='grid grid-cols-2 gap-2'>
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
                                            <label htmlFor="" className='text-[16px]'>Company Name</label>
                                            <input
                                                type="tel"
                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                                                placeholder='Company Name'
                                            />
                                        </div>

                                    </div>
                                    <div className='grid grid-cols-4 gap-2'>
                                        <div className=''>
                                            <label htmlFor="" className='text-[16px]'>Select Box Style</label>
                                            <input
                                                type="text"
                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                                                placeholder='Select Box Style'
                                            />
                                        </div>
                                        <div className=''>
                                            <label htmlFor="" className='text-[16px]'>Size (Length)</label>
                                            <input
                                                type="number"
                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                                                placeholder='Select Box Style'
                                            />
                                        </div>
                                        <div className=''>
                                            <label htmlFor="" className='text-[16px]'>Size (Width)</label>
                                            <input
                                                type="number"
                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                                                placeholder='Select Box Style'
                                            />
                                        </div>
                                        <div className=''>
                                            <label htmlFor="" className='text-[16px]'>Size (Depth)</label>
                                            <input
                                                type="number"
                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                                                placeholder='Select Box Style'
                                            />
                                        </div>

                                    </div>
                                    <div className='grid grid-cols-5 gap-2'>
                                        <div className=''>
                                            <label htmlFor="" className='text-[16px]'>Quantity</label>
                                            <input
                                                type="text"
                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
                                                placeholder='Select Box Style'
                                            />
                                        </div>
                                        <div className=''>
                                            <label htmlFor="" className=' text-[16px]'>Stock</label>
                                            <select
                                                name=""
                                                id=""

                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
                                                <option value="12pt Cardboard">12pt Cardboard</option>
                                                <option value="14pt Cardboard">14pt Cardboard</option>
                                                <option value="16pt Cardboard">16pt Cardboard</option>
                                                <option value="18pt Cardboard">18pt Cardboard</option>
                                                <option value="20pt Cardboard">20pt Cardboard</option>
                                                <option value="22pt Cardboard">22pt Cardboard</option>
                                                <option value="24pt Cardboard">24pt Cardboard</option>
                                                <option value="White SBS C1S C2S ">White SBS C1S C2S </option>
                                                <option value="Corrugated">Corrugated</option>
                                                <option value="Rigid">Rigid</option>
                                                <option value="Kraft">Kraft</option>
                                                <option value="Linen">Linen</option>
                                            </select>
                                        </div>
                                        <div className=''>
                                            <label htmlFor="" className=' text-[16px]'>Colors</label>
                                            <select
                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
                                                <option value="Plain (No Printing)">Plain (No Printing)</option>
                                                <option value="1 Color">1 Color</option>
                                                <option value="2 Color">2 Color</option>
                                                <option value="3 Color">3 Color</option>
                                                <option value="4 Color">4 Color</option>
                                                <option value="4/1 Color">4/1 Color</option>
                                                <option value="4/2 Color">4/2 Color</option>
                                                <option value="4/3 Color">4/3 Color</option>
                                                <option value="4/4 Color">4/4 Color</option>
                                            </select>
                                        </div>
                                        <div className=''>
                                            <label htmlFor="" className=' text-[16px]'>Printing Sides</label>
                                            <select

                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
                                                <option value="inside">inside</option>
                                                <option value="outside">outside</option>
                                                <option value="Both(Inside & Outside)">Both(Inside & Outside)</option>
                                            </select>
                                        </div>
                                        <div className=''>
                                            <label htmlFor="" className=' text-[16px]'>Add-Ons</label>
                                            <select

                                                className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
                                                <option value=""></option>
                                                <option value="Foiling">Foiling</option>
                                                <option value="Spot UV">Spot UV</option>
                                                <option value="Embossing">Embossing</option>
                                                <option value="Debossing">Debossing</option>
                                                <option value="Handles">Handles</option>
                                                <option value="Inserts">Inserts</option>
                                                <option value="Windows">Windows</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="space-y-2 ">
                                        <label className="block text-lg font-medium text-gray-700">
                                            Upload Your Design (Max Size 5MB)<br />
                                            <span className="text-sm text-gray-500">
                                                Allowed File Types: <b>png, pdf, jpg, jpeg, webp</b> </span>
                                        </label>

                                        <div className="flex items-center space-x-4">
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
                                    </div>
                                    <div className=''>
                                        <label htmlFor="" className=' text-[16px]'>Message</label>
                                        <textarea
                                            rows={3}
                                            placeholder='Tell us the size/ dimensions, material, finishing, add-ons, and design preferences.'
                                            className='w-full rounded-[8px]  border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4  placeholder:font-semibold placeholder:text-sm'></textarea>
                                    </div>
                                    <div className=''><Button className='w-full text-white' children={"Request a Quote"}/></div>
                                </form>
                            </div>





                        </div>
                    </div>


                </Container>
            </div>
             {/**First Section End Here*/}
             {/**Tabs Start*/}

             <Container>
                 <TabsProduct/>

             </Container>

            
             {/**Tabs End*/}
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

         {/**First banner Start */}
        <div className='bg-[#ffdebf] py-5 '>
        <Container>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5'>
            <div className='flex flex-col space-y-4'>
              <h3 className='text-4xl font-semibold'>How would one define Window Boxes?​</h3>
              <div className='max-h-[300px] overflow-y-auto p-5'>
                 <p className='sm:text-[17px] text-sm  leading-[25px] font-normal text-[#7a7a7a]'> Firstly, let’s focus on custom Window packaging boxes, what are they? We use these special boxes to protect and carry your products, from one place to another. Unlike standard boxes, they are customizable, considering factors like size, shape, material, and printing to fully fit the product they hold. All in all, custom-printed Window boxes with logos play an important role in product presentation and protection. It allows the brand to display its unique identity and branding.Moreover, personalized Window boxes create an unforgettable unboxing experience, promoting brand loyalty which inspires repeat purchases in e-commerce. A well-designed and customized Window packaging plan can help the brand stand out in the market. So, here is a chance to think about a custom Window box that should be well-designed, precisely sized, and perfectly shaped. It will take your business to new heights. Overall, whatever you are thinking, take your chance, nothing is out of our reach.</p>

              </div>
             
              <div className='space-x-2 space-y-2 hidden sm:block p-5'>
                <Button children={"Order Process"} className='text-white  hover:text-[#ff931e] transition-all' />
                
              </div>
            </div>
            <div className='flex justify-center'>
              <img src={category} width={500} height={400} className='rounded-lg object-cover' alt="" />
            </div>
          </div>
        </Container>
      </div>
      {/**First Banner End */}

      {/**Simple Steps Start*/}
      <div className='bg-[#f3f3f3]'>
        <Container>
          <div className='text-center space-y-5 py-[50px]'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Simple Steps to get the Custom Packaging Produced</h2>
            <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Give our new and creative Following are few steps which provide the complete Guide.</p>

          </div>
          <SimpleSteps />
        </Container>

      </div>
      {/**Simple Steps end*/}
      {/**Products Related Start*/}   
      <div className='bg-[#ffdebf]'>
         <div className='text-center mb-5'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Related Products</h2>
           
          </div>
         <Container>
       <ProductCard/>
      </Container>

      </div>
     
      {/**Products Related End*/}
     

        </>
    )
}

export default SingleProduct
