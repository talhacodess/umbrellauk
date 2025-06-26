import React, { useState } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import Button from '../../components/Button';
import Container from '../../components/Container'
import TabsProduct from './TabsProduct';

function SingleProduct() {
    const [images, setImages] = useState(
        {
            img1: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Apparel-Gift-Boxes.webp",
            img2: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Custom-Printed-Apparel-Gift-Boxes.webp",
            img3: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Customized-Apparel-Gift-Boxes.webp",
            img4: "https://umbrellapackaging.com/wp-content/uploads/2024/05/Custom-Printed-Bakery-Gift-Boxes-.webp"
        }
    )
    const [activeImage, setActiveImage] = useState(images.img1)
    return (
        <>
            {/**First Section*/}
            <div className='bg-[#f7f7f7]'>
                <Container>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center' >
                        <div className=''>
                            <div className='flex flex-col gap-5'>
                                <img src={activeImage} alt="" className='w-full h-full aspect-square object-cover rounded-[8px]' />

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
                                <h2 className='text-4xl font-semibold'>Custom Debossing Boxes</h2>
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

        </>
    )
}

export default SingleProduct
