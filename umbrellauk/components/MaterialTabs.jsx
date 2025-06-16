import React from 'react'
import Button from './Button';
import { useState } from 'react';
import rigid from '../src/assets/rigid-boxes.webp'
import kraft from '../src/assets/kraft-boxes.webp'  
import corrugated from '../src/assets/corrugated-boxes.webp'  
import cardboard from '../src/assets/cardboard-boxes.webp'  
import blackl from '../src/assets/black-linen-boxes.webp'  
import whitel from '../src/assets/white-linen-boxes.webp'  
import bux from '../src/assets/bux-board-boxes.webp'  


function MaterialTabs() {
    const [activeTab, setActiveTab] = useState(0);


    {/** Tabs Material Guide Start */ }
    const tabs = [
        <h4 className="uppercase text-[16px] font-bold">Rigid Boxes</h4>,
        <h4 className="uppercase text-[16px] font-bold">Kraft Boxes</h4>,
        <h4 className="uppercase text-[16px] font-bold">Corrugated Boxes</h4>,
        <h4 className="uppercase text-[16px] font-bold">Cardboard Boxes</h4>,
        <h4 className="uppercase text-[16px] font-bold">Black Linen Boxes</h4>,
        <h4 className="uppercase text-[16px] font-bold">White Linen Boxes</h4>,
        <h4 className="uppercase text-[16px] font-bold">Bux Board Boxes</h4>,

    ]


    const contents = [
        <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
            <div className="md:w-6/12 w-full  text-start space-y-4">
                <h2 className="text-[35px] font-bold">Rigid Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Strong Boxes for Special Things: Rigid Boxes Explained!</h3>
                <p className="text-[#585858] text-[16px]">Rigid boxes are like super strong and unbreakable homes for extraordinary things. The manufacturers make these boxes using special materials to keep toys, makeup, and nice things protected. Additionally, people use printed rigid boxes to make things look extra special by painting them with cool colors and designs.</p>
                <button className=" rounded-[10px] bg-[#293453] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
            </div>
            <div className="md:w-6/12 w-full ">
                <img src={rigid} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
            <div className="md:w-6/12 w-full  text-start space-y-4">
                <h2 className="text-[35px] font-bold">Kraft Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Go Green with Kraft Boxes!</h3>
                <p className="text-[#585858] text-[16px]">Make a smart choice with Kraft boxes—good for your stuff and good for the environment! These boxes are strong containers for packing things, and they’re made from a special paper called kraft paper. These boxes are handy for packing lots of different things, showing that they work well for many uses.</p>
                <button className=" rounded-[10px] bg-[#293453] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
            </div>
            <div className="md:w-6/12 w-full ">
                <img src={kraft} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
            <div className="md:w-6/12 w-full  text-start space-y-4">
                <h2 className="text-[35px] font-bold">Corrugated Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Super Boxes: How Corrugated Magic Keeps Things Safe!</h3>
                <p className="text-[#585858] text-[16px]">Corrugated boxes are special types of containers made from a material called corrugated cardboard. Essentially, these boxes consist of three layers. The inner layer, known as corrugation, adds strength and durability to the box. Perfect for mailing and shipping, they make sure your items reach their destination in great shape. Trust corrugated boxes for a safe and secure journey!</p>
                <button className=" rounded-[10px] bg-[#293453] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
            </div>
            <div className="md:w-6/12 w-full ">
                <img src={kraft} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
            <div className="md:w-6/12 w-full  text-start space-y-4">
                <h2 className="text-[35px] font-bold">Cardboard Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Magic of Cardboard: Versatile Containers for Retail Packaging!</h3>
                <p className="text-[#585858] text-[16px]">Cardboard boxes are like strong, big containers made out of thick paper. They’re used for packing and carrying lots of different things. They come in all shapes and sizes, like small ones for holding toys or big ones. These boxes are perfect for packaging your items and making them look neat on the shelves. They keep your products safe and make your shop look great!</p>
                <button className=" rounded-[10px] bg-[#293453] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
            </div>
            <div className="md:w-6/12 w-full ">
                <img src={cardboard} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
            <div className="md:w-6/12 w-full  text-start space-y-4">
                <h2 className="text-[35px] font-bold">Black Linen Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Fancy Boxes: Cool Black Linen Style!
</h3>
                <p className="text-[#585858] text-[16px]">Get sleek Black Linen boxes for your special items! These boxes look cool and feel smooth. They come in black color. These boxes are eco-friendly helping to keep the Earth healthy. Perfect for keeping your things safe and looking fancy. You can choose black Linen boxes for a stylish way to store and protect your stuff!</p>
                <button className=" rounded-[10px] bg-[#293453] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
            </div>
            <div className="md:w-6/12 w-full ">
                <img src={blackl} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
            <div className="md:w-6/12 w-full  text-start space-y-4">
                <h2 className="text-[35px] font-bold">White Linen Boxes Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Classic Elegance: White Linen Boxes!
</h3>
                <p className="text-[#585858] text-[16px]">White Linen boxes are bright and feel soft. Perfect for keeping your stuff safe and looking neat. They come in bright white color. You can choose white Linen boxes for a cool way to store and protect your things! These boxes are eco-friendly helping to keep the Earth healthy.</p>
                <button className=" rounded-[10px] bg-[#293453] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
            </div>
            <div className="md:w-6/12 w-full ">
                <img src={whitel} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,
        <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
            <div className="md:w-6/12 w-full  text-start space-y-4">
                <h2 className="text-[35px] font-bold">Bux Board Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Affordable and Reliable: Bux Board Boxes!
</h3>
                <p className="text-[#585858] text-[16px]">Bux Board boxes are budget-friendly options for storing your things. Despite being economical, they’re still strong and reliable. Don’t let the low price fool you – they are still sturdy and get the job done. So, if you’re looking for an inexpensive yet dependable packaging or storage option, Bux Board boxes are a great choice, providing both affordability and reliability.</p>
                <button className=" rounded-[10px] bg-[#293453] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
            </div>
            <div className="md:w-6/12 w-full ">
                <img src={whitel} alt="" className="rounded-[10px] w-full" />
            </div>

        </div>,

    ];
    return (
        <>

            <div className='grid grid-cols-12'>

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

            </div>




        </>
    )
}

export default MaterialTabs
