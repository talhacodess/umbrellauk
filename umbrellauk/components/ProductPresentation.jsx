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



function ProductPresentation() {
    const [activeTab, setActiveTab] = useState(0);


    {/** Tabs Material Guide Start */ }
    const tabs = [
        <h4 className="uppercase text-[16px] font-bold">Embossing</h4>,
        <h4 className="uppercase text-[16px] font-bold">Debossing</h4>,
        <h4 className="uppercase text-[16px] font-bold">Silver Foiling</h4>,
        <h4 className="uppercase text-[16px] font-bold">Gold Foiling</h4>,
        <h4 className="uppercase text-[16px] font-bold">Spot UV</h4>,
        <h4 className="uppercase text-[16px] font-bold">Holographic</h4>,
    ]


    const contents = [
        <div className=" grid grid-cols-3 bg-[#fff] p-[25px] border-[#3d3d3d] rounded-[10px] gap-5">
            <div>
             <img src={em1} alt="" className="rounded-[10px] w-full" />   
            </div>
            <div>
                <img src={em2} alt="" className="rounded-[10px] w-full" />
            </div>
            <div>
                <img src={em3} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className=" grid grid-cols-3 bg-[#fff] p-[25px] border-[#3d3d3d] rounded-[10px] gap-5">
            <div>
             <img src={d1} alt="" className="rounded-[10px] w-full" />   
            </div>
            <div>
                <img src={d2} alt="" className="rounded-[10px] w-full" />
            </div>
            <div>
                <img src={d3} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className=" grid grid-cols-3 bg-[#fff] p-[25px] border-[#3d3d3d] rounded-[10px] gap-5">
            <div>
             <img src={s1} alt="" className="rounded-[10px] w-full" />   
            </div>
            <div>
                <img src={s2} alt="" className="rounded-[10px] w-full" />
            </div>
            <div>
                <img src={s3} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className=" grid grid-cols-3 bg-[#fff] p-[25px] border-[#3d3d3d] rounded-[10px] gap-5">
            <div>
             <img src={g1} alt="" className="rounded-[10px] w-full" />   
            </div>
            <div>
                <img src={g2} alt="" className="rounded-[10px] w-full" />
            </div>
            <div>
                <img src={g3} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className=" grid grid-cols-3 bg-[#fff] p-[25px] border-[#3d3d3d] rounded-[10px] gap-5">
            <div>
             <img src={u1} alt="" className="rounded-[10px] w-full" />   
            </div>
            <div>
                <img src={u2} alt="" className="rounded-[10px] w-full" />
            </div>
            <div>
                <img src={u3} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className=" grid grid-cols-3 bg-[#fff] p-[25px] border-[#3d3d3d] rounded-[10px] gap-5">
            <div>
             <img src={h1} alt="" className="rounded-[10px] w-full" />   
            </div>
            <div>
                <img src={h2} alt="" className="rounded-[10px] w-full" />
            </div>
            <div>
                <img src={h3} alt="" className="rounded-[10px] w-full" />
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

export default ProductPresentation
