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
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>In-house Production</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging tend to rely on its in-house production units most of the time in order to expedite the orders for the customers.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold text-center text-nowrap'>Offshore Printing Facilities</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging have its various printing facilities outside USA where the orders are being produced at the lowest possible cost with same turnaround time.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>Free Shipping</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging make your order even more cost effective by providing you the free ground and air freight and delivers the orders on time.</p>
                </div>

            </div>,
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>In-house Production</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging tend to rely on its in-house production units most of the time in order to expedite the orders for the customers.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold text-center text-nowrap'>Offshore Printing Facilities</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging have its various printing facilities outside USA where the orders are being produced at the lowest possible cost with same turnaround time.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>Free Shipping</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging make your order even more cost effective by providing you the free ground and air freight and delivers the orders on time.</p>
                </div>

            </div>,
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>In-house Production</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging tend to rely on its in-house production units most of the time in order to expedite the orders for the customers.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold text-center text-nowrap'>Offshore Printing Facilities</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging have its various printing facilities outside USA where the orders are being produced at the lowest possible cost with same turnaround time.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>Free Shipping</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging make your order even more cost effective by providing you the free ground and air freight and delivers the orders on time.</p>
                </div>

            </div>,
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>In-house Production</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging tend to rely on its in-house production units most of the time in order to expedite the orders for the customers.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold text-center text-nowrap'>Offshore Printing Facilities</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging have its various printing facilities outside USA where the orders are being produced at the lowest possible cost with same turnaround time.</p>
                </div>
                <div className='flex flex-col justify-evenly items-center bg-[#fff] rounded-[8px] p-5 shadow hover:shadow-2xl'>

                    <h3 className='text-xl font-bold'>Free Shipping</h3>
                    <p className='text-[16px] text-[#2E2D2D] font-[400] text-center'>Umbrella Custom Packaging make your order even more cost effective by providing you the free ground and air freight and delivers the orders on time.</p>
                </div>

            </div>,

    ];
    return (
        <>

            <div className='grid grid-cols-12 gap-3'>

                  <div className=' md:col-span-10 col-span-12'>
                    <div className="w-full mt-5">
                        {contents && contents.map((content, index) => {
                            if (activeTab === index) {
                                return <div key={`${index}`}>{content}</div>
                            }
                            return null

                        })}


                    </div>
                </div>

                <div className=' md:col-span-2 col-span-12'>
                    <div className='flex md:flex-col flex-row space-x-2  overflow-x-auto gap-3 justify-center'>
                        {tabs.map((tab, index) => (
                            <div>
                                <Button onClick={() => setActiveTab(index)}
                                    key={`${index}`}
                                    className={`py-[15px] w-full whitespace-nowrap  px-[35px] border border-[#E9E9E9] rounded-lg ${activeTab === index ? 'bg-[#ff931e] text-white' : 'text-black bg-[#f7f7f7]'} hover:bg-[#293453] hover:text-[#fff] text-[fff]`} bgColor={'#fff'} textColor={'#000'} children={tab}
                                />
                            </div>
                        ))}
                    </div>

                </div>
              

            </div>




        </>
    )
}

export default SimpleSteps
