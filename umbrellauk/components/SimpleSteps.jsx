import React from 'react'
import Button from './Button';
import { useState } from 'react';
import em1 from '../src/assets/em1.webp'
import em2 from '../src/assets/em2.webp'
import em3 from '../src/assets/em3.webp'
import d1 from '../src/assets/d1.webp'
import d2 from '../src/assets/d2.webp'
import d3 from '../src/assets/d3.webp'
import s1 from '../src/assets/s1.webp'
import s2 from '../src/assets/s2.webp'
import s3 from '../src/assets/s3.webp'
import g1 from '../src/assets/g1.webp'
import g2 from '../src/assets/g2.webp'
import g3 from '../src/assets/g3.webp'
import u1 from '../src/assets/u1.webp'
import u2 from '../src/assets/u2.webp'
import u3 from '../src/assets/u3.webp'
import h1 from '../src/assets/h1.webp'
import h2 from '../src/assets/h2.webp'
import h3 from '../src/assets/h3.webp'



function SimpleSteps() {
    const [activeTab, setActiveTab] = useState(0);


    {/** Tabs Material Guide Start */ }
    const tabs = [
        <h4 className="uppercase text-[16px] font-bold">Price Quote</h4>,
        <h4 className="uppercase text-[16px] font-bold">Design Approval</h4>,
        <h4 className="uppercase text-[16px] font-bold">Payment</h4>,
        <h4 className="uppercase text-[16px] font-bold">Production</h4>,
        <h4 className="uppercase text-[16px] font-bold">Shipping</h4>,
        <h4 className="uppercase text-[16px] font-bold">Reorders</h4>,
    ]


    const contents = [
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Get Price Quote</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Submit a request for free custom quote first through our website or calling our customer service representative. You will have the prices in 30 minutes.</p>
            </div>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold text-center text-nowrap'>Price Matching</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Match the price with your budget line and ask the representative to beat that. We will try our best to give you the lowest possible prices here at Umbrella Custom Packaging.</p>
            </div>
            <div className='flex flex-col justify-evenly border border-[#D9D9D987] items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Price Approval</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Give your approval on the prices to proceed with the order right away. We will be delighted to take you on board with Umbrella Custom Packaging throughout your packaging needs.</p>
            </div>

        </div>,
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Mockup/design Creation</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Share your artwork file to the dedicated representative so that our design department can create a 3D digital mockup for you. You can ask for the template to design it by your own as well.</p>
            </div>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold text-center text-nowrap'>Design Suggestions</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>It’s a very important step. Our Creative design team can provide you some creative design suggestions if you ask for that. It’s a certain value addition to your packaging.</p>
            </div>
            <div className='flex flex-col justify-evenly border border-[#D9D9D987] items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Mockup/design Approval</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>After you receive a 3D digital Mockup for your packaging, you need to approve that in order to proceed ahead. You can ask for frequent changes until it satisfies you before you approve it.</p>
            </div>

        </div>,
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Credit/Debit Card</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The next step is to make the payment and our payment methods are very secure. the first one is that you can make it through your debit/card.</p>
            </div>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold text-center text-nowrap'>PayPal</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The other method is for the PayPal users. We accept the payments through PayPal as well. Refund Policy is mentioned on our website.</p>
            </div>
            <div className='flex flex-col justify-evenly border border-[#D9D9D987] items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Wire/ACH Bank Transfer</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>For the bigger amounts we suggest Wire/ACH bank transfers in order to avoid the payment processor’s taxes.</p>
            </div>

        </div>,
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Final Specification Sheet</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>A final specification sheet will be sent to you before we send your order towards to the production after the payment.</p>
            </div>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold text-center text-nowrap'>Prototyping/Sampling</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The sample run will be sent to the customer before the bulk order if it’s required or if the customer go for it.</p>
            </div>
            <div className='flex flex-col justify-evenly border border-[#D9D9D987] items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Order Production</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The order will be produced in the given time span and will be sent toward the Quality Control unit before shipping.</p>
            </div>

        </div>,
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Quality Control</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Our QC department will check the order and approve it after certain text if it comes good. After It will be sent to the shipping department.</p>
            </div>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold text-center text-nowrap'>Shipping</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The Order will be shipped right away after it is cleared from the QC department. Tracking ID will be provided and the order will be delivered.</p>
            </div>
            <div className='flex flex-col justify-evenly border border-[#D9D9D987] items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Customer’s Review</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The customer’s thoughts and suggestions on the order will be taken and displayed on our media. Also, the issue will be addressed.

</p>
            </div>

        </div>,
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Dedicated Support Person</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>One of our customer service representative will be appointed to the customer whoever places the order with us. He/she will keep the customer in a loop so to make the next order placement super easy for both the customer and company.</p>
            </div>
            <div className='flex flex-col justify-evenly items-center border border-[#D9D9D987] bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold text-center text-nowrap'>Discounts</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>The customer will be regularly informed about the discounts that the company offers every month and year like month-end and Christmas discounts.</p>
            </div>
            <div className='flex flex-col justify-evenly border border-[#D9D9D987] items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                <h3 className='text-xl font-bold'>Long Term Business Partnership</h3>
                <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging will ultimately build this route to a successful and profitable business relationship with the customer.</p>
            </div>

        </div>,
            

    ];
    return (
        <>

            <div className='grid grid-rows-1  '>

                <div className=' '>
                    <div className='flex overflow-x-auto  space-x-5 gap-5'>
                        {tabs.map((tab, index) => (
                            <div>
                                <Button onClick={() => setActiveTab(index)}
                                    key={`${index}`}
                                    className={`py-[15px] w-full  whitespace-nowrap  px-[35px] border border-[#D9D9D987] rounded-lg ${activeTab === index ? 'bg-[#ff931e] text-white' : 'text-black bg-[#fff]'} hover:bg-[#293453] hover:text-[#fff] text-[fff]`} bgColor={'#fff'} textColor={'#000'} children={tab}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <div className=' '>
                    <div className=" mt-5 bg-white p-10 rounded-lg shadow">
                        {contents && contents.map((content, index) => {
                            if (activeTab === index) {
                                return <div key={`${index}`}>{content}</div>
                            }
                            return null

                        })}


                    </div>
                </div>




            </div>




        </>
    )
}

export default SimpleSteps
