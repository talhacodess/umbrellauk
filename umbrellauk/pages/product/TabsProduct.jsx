import React, { useState } from 'react'
import Button from '../../components/Button';
import dieline from '../../src/assets/dieline.svg'
import redDoted from '../../src/assets/red-doted.png'
import redSimple from '../../src/assets/red-updated.png'
import greenSimple from '../../src/assets/green-updated.png'
import blackSimple from '../../src/assets/black-updated.png'
import one from '../../src/assets/01.svg'
import two from '../../src/assets/02.svg'
import three from '../../src/assets/03.svg'
import four from '../../src/assets/04.svg'
import five from '../../src/assets/05.svg'
import six from '../../src/assets/06.svg'
import seven from '../../src/assets/07.svg'
import FaqCom from '../../components/FaqCom';
import { Link } from 'react-router-dom';


function TabsProduct() {
    const [activeTab, setActiveTab] = useState(0);
    const Tabs = [
        <h4 className="uppercase text-[16px] font-bold">Description</h4>,
        <h4 className="uppercase text-[16px] font-bold">Specification</h4>,
        <h4 className="uppercase text-[16px] font-bold">Why Us</h4>,
        <h4 className="uppercase text-[16px] font-bold">Guide Post</h4>,
        <h4 className="uppercase text-[16px] font-bold">Order Process</h4>,
        <h4 className="uppercase text-[16px] font-bold">FAQ's</h4>,
    ]
    const content = [
        <div>Description</div>,
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-left text-sm">
                <tbody>
                    {[
                        ["Sizes", "All custom shapes and sizes"],
                        ["Paper Stock", "14pt cardboard, 16pt cardboard, 18pt cardboard & 24pt cardboard, White SBS C1S C2S, Corrugated, Rigid, Kraft, Linen"],
                        ["Printing", "Digital, Offset (PMS and CMYK) and Screen Printing"],
                        ["Options", "Matte, Glossy, Spot UV, Aqueous Coating and Embossing, Debossing"],
                        ["Extras", "Flaps, Ribbons, thread handles, gold foiling, silver foiling"],
                        ["Quantities", "Short run and Bulk orders are accepted"],
                        ["Proofing", "3D Digital Mockup, Physical Sampling (On Demand)"],
                        ["Turnaround Time", "6–7 days to print and dispatch, and 2–3 days for ground shipping"]
                    ].map(([label, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                            <td className="border border-gray-200 px-4 py-3 font-semibold text-sm text-gray-800 w-1/4">{label}</td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>,
        <div> <h3 className='sm:text-4xl text-xl font-semibold text-center pb-5'>What Sets Umbrella Custom Packaging Apart​</h3>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>Dedicated Support Person</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>One of our customer service representative will be appointed to the customer whoever places the order with us. He/she will keep the customer in a loop so to make the next order placement super easy for both the customer and company.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold text-center text-nowrap'>Long Term Business Partnership</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging will ultimately build this route to a successful and profitable business relationship with the customer.</p>
                </div>
                <div className='flex flex-col justify-evenly border border-[#D9D9D987] items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>Discounts</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The customer will be regularly informed about the discounts that the company offers every month and year like month-end and Christmas discounts.</p>
                </div>

            </div>
        </div>,
        <div>
            <h3 className='sm:text-4xl text-xl font-semibold text-center pb-5'>Artwork Preparation Guide​</h3>
            <div className='grid grid-cols-12 bg-[#f7f7f7] p-3 rounded-lg gap-5'>
                <div className='col-span-4 bg-white rounded-lg'>
                    <img src={dieline} alt="" />
                </div>
                <div className='col-span-8'>
                    <div className='grid grid-cols-2'>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={blackSimple} alt="" /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Cut Line (Black Lines):</h6>
                                <p className='text-sm'>Indicates the cut at its final size. Important artwork and text should be placed at least 0.125 inches inside of the cut line.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={greenSimple} alt="" width={140} height={140} /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Bleed Line (Green Lines):</h6>
                                <p className='text-sm'>Indicates where the product is to be folded.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={redDoted} alt=""  /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Perforation (Dotted Red Lines):</h6>
                                <p className='text-sm'>Perforation line refers to paper that is punched with very small holes to allow the paper to be torn and folded easily</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={redSimple} alt="" /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Crease Line (Red Lines)</h6>
                                <p className='text-sm'>Indicates where the bleed line is located. Any artwork which goes to the cut line should be extended to the bleed line to get a seamless print.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div>
            <div>
              <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={one} alt="" className=' w-full rounded-2xl border-1 border-[#0000001a]' /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Choose Your Custom Packaging Boxes</h6>
                                <p className='text-sm'>Explore our range of curated retail packaging boxes to discover the packaging solution that's right for your business. If you have any questions about available custom boxes as you browse, our dedicated team is here to help. Simply click on the Live Chat Support function, which can be found in the bottom right-hand corner of your screen.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={two} alt="" className=' w-full rounded-2xl border-1 border-[#0000001a]' /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Request a Free Instant Quote</h6>
                                <p className='text-sm'>It's simple, speedy and free to request a quote from us - just navigate to the box at the top right-hand side of this page and let us know what you're looking for. Remember to include valuable details like box dimensions, custom options, the number of boxes you need, design ideas and internal deadlines.</p>
                            </div>
                        </div>
                      
                      
                    </div>
              <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={three} alt="" className=' w-full rounded-2xl border-1 border-[#0000001a]' /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Finalize Your Order</h6>
                                <p className='text-sm'>As soon as we've received your request, our custom packaging specialists will prepare your tailored quote. We guarantee to come back to you within 1-2 hours on business days, so you can swiftly start your packaging journey. If you requested design help in your q   uote, then, at this point, your designated customized packaging specialist will connect with you over email or phone to finalize your vision.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={four} alt="" className=' w-full rounded-2xl border-1 border-[#0000001a]' /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Time to Make a Custom Dieline</h6>
                                <p className='text-sm'>In the packaging world, a dieline is an artwork template that ensures that the design of your package is laid out correctly before going into production. It is a flat diagram with markings that indicate where the package's fold and cut lines are. As soon as we've received your payment, our packaging wizards will prepare your dieline file and send it over for review within 1-2 business day</p>
                            </div>
                        </div>
                      
                      
                    </div>
              <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={one} alt="" className=' w-full rounded-2xl border-1 border-[#0000001a]' /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Choose Your Custom Packaging Boxes</h6>
                                <p className='text-sm'>Explore our range of curated retail packaging boxes to discover the packaging solution that's right for your business. If you have any questions about available custom boxes as you browse, our dedicated team is here to help. Simply click on the Live Chat Support function, which can be found in the bottom right-hand corner of your screen.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div><img src={two} alt="" className=' w-full rounded-2xl border-1 border-[#0000001a]' /></div>
                            <div className='space-y-2'>
                                <h6 className='text-lg font-semibold'>Request a Free Instant Quote</h6>
                                <p className='text-sm'>It's simple, speedy and free to request a quote from us - just navigate to the box at the top right-hand side of this page and let us know what you're looking for. Remember to include valuable details like box dimensions, custom options, the number of boxes you need, design ideas and internal deadlines.</p>
                            </div>
                        </div>
                      
                      
                    </div>
                    </div>
        </div>,
         <div>
          <h2 className='md:text-[35px] text-lg font-semibold  uppercase leading-9 text-center mb-5'>Frequently Asked Questions</h2>

       
          <div className='grid grid-cols-2 gap-4'>
          <div>
            <FaqCom title={"Do you offer Free Samples"} answer={"Yes, if you need any random samples to check the material and printing quality. If you need the samples of your customized box, we do not offer free samples or material kits."} />

            <FaqCom title={"How can I create my design"} answer={"All you need send us your artwork and we would provide you a 3D digital Mockup of your box along with a template."} />

            <FaqCom title={"Do you charge extra, based on the number of colors and ink coverage"} answer={"No, all the products are printed in full color at no extra charge."} />

            <FaqCom title={"What kind of custom packaging do you offer"} answer={
              <> Visit our Home Page to see the full range of what we are offering. Each custom packaging option has a free and easy-to-use online designer that’ll help you create attractive and unforgettable unboxing experiences. Don’t see what you’re looking for? Reach out to us at{" "}
                <Link to="mailto:sales@umbrellapackaging.com" className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com</Link>.</>} />

            <FaqCom title={"Do you have a pick-up location"} answer={
              <>
                Yes, we do have a pick-up location but usually we ship the orders to the doorstep. please email us at <Link to="mailto:sales@umbrellapackaging.com" className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com</Link> for more details.
              </>
            } />
          </div>
          <div>
            <FaqCom title={"How can I reorder"} answer={"Simply, contact to the same email you contacted last time and place your reorder."} />

            <FaqCom title={"What is the best way to contact you"} answer={
              <>Contact us via email any time <Link to={"mailto:sales@umbrellapackaging.com"} className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com.</Link>  You can also DM us through Facebook or Instagram, where our team will get back to you within 24 – 48 business hours.</>
            } />

            <FaqCom title={"What is your MOQ? Do you print small order quantities"} answer={"Our MOQ is 100 boxes, yes we can offer less number of boxes for ordering."} />

            <FaqCom title={"Do you print larger order quantities?"} answer={<>Yes, we have the capability to print the orders as per client’s requirements.
              (100 – 500,000 – up to any number).</>} />

            <FaqCom title={"What if my artwork has gradients?"} answer={"Gradients are handled with care so to get the desired results in printing. Firstly, there are a few initial quick sample sheets are printed to verify so to move towards the bulk run."} />
          </div>

        </div>
         </div>




    ]
    return (
        <>
            <div className='grid grid-cols-1 mt-20'>

                <div className='flex overflow-x-auto justify-center-safe space-x-5 gap-5'>
                    {Tabs.map((btn, index) => (
                        <div>
                            <Button onClick={() => setActiveTab(index)}
                                key={index}
                                className={`py-[15px] w-full  whitespace-nowrap  px-[35px] border border-[#D9D9D987] rounded-lg ${activeTab === index ? 'bg-[#ff931e] text-white' : 'text-black bg-[#fff]'} hover:bg-[#293453] hover:text-[#fff] text-[fff]`} bgColor={'#fff'} textColor={'#000'} children={btn}
                            />

                        </div>
                    ))}

                </div>

                <div className=' '>
                    <div className="w-full mt-5 bg-white p-5 rounded-lg shadow">
                        {content && content.map((content, index) => {
                            if (activeTab === index) {
                                return <div key={index}>{content}</div>
                            }
                            return null

                        })}


                    </div>
                </div>

            </div>

        </>
    )
}

export default TabsProduct
