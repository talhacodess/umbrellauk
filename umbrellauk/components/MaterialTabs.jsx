import React from 'react'
import Button from './Button';
import { useState } from 'react';
import rigid from '../src/assets/rigid-boxes.webp'


function MaterialTabs() {
    const [activeTab, setActiveTab] = useState(0);

    
    {/** Tabs Material Guide Start */}
    const    tabs = [
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
        <p className="text-[#1f1f1f77] text-[14px]">Rigid boxes are like super strong and unbreakable homes for extraordinary things. The manufacturers make these boxes using special materials to keep toys, makeup, and nice things protected. Additionally, people use printed rigid boxes to make things look extra special by painting them with cool colors and designs.</p>
        <button className=" border-1 border-[#5a56e9] rounded-[10px] bg-[#5a56e9] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
        </div>
        <div className="md:w-6/12 w-full ">
        <img src={rigid} alt="" className="rounded-[10px] w-full" />
        </div>

    </div>,
                <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
                <div className="md:w-6/12 w-full text-start space-y-4">
                <h2 className="text-[35px] font-bold">Corrugated Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Strong Boxes for Special Things: Rigid Boxes Explained!</h3>
                <p className="text-[#1f1f1f77] text-[14px]">Rigid boxes are like super strong and unbreakable homes for extraordinary things. The manufacturers make these boxes using special materials to keep toys, makeup, and nice things protected. Additionally, people use printed rigid boxes to make things look extra special by painting them with cool colors and designs.</p>
                <button className=" border-1 border-[#5a56e9] rounded-[10px] bg-[#5a56e9] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
                </div>
                <div className="md:w-6/12 w-full">
                <img src={rigid} alt="" className="rounded-[10px] w-full" />
                </div>
        
            </div>,
                <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
                <div className="md:w-6/12 w-full text-start space-y-4">
                <h2 className="text-[35px] font-bold">Kraft Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Strong Boxes for Special Things: Rigid Boxes Explained!</h3>
                <p className="text-[#1f1f1f77] text-[14px]">Rigid boxes are like super strong and unbreakable homes for extraordinary things. The manufacturers make these boxes using special materials to keep toys, makeup, and nice things protected. Additionally, people use printed rigid boxes to make things look extra special by painting them with cool colors and designs.</p>
                <button className=" border-1 border-[#5a56e9] rounded-[10px] bg-[#5a56e9] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
                </div>
                <div className="md:w-6/12 w-full">
                <img src={rigid} alt="" className="rounded-[10px] w-full" />
                </div>
        
            </div>,
                <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
                <div className="md:w-6/12 w-full text-start space-y-4">
                <h2 className="text-[35px] font-bold">Cardboard Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Strong Boxes for Special Things: Rigid Boxes Explained!</h3>
                <p className="text-[#1f1f1f77] text-[14px]">Rigid boxes are like super strong and unbreakable homes for extraordinary things. The manufacturers make these boxes using special materials to keep toys, makeup, and nice things protected. Additionally, people use printed rigid boxes to make things look extra special by painting them with cool colors and designs.</p>
                <button className=" border-1 border-[#5a56e9] rounded-[10px] bg-[#5a56e9] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
                </div>
                <div className="md:w-6/12 w-full">
                <img src={rigid} alt="" className="rounded-[10px] w-full" />
                                </div>
        
            </div>,
                <div className="flex md:flex-row flex-col bg-[#f7f7f7] p-[25px] border-[#3d3d3d] rounded-[10px] gap-10">
                <div className="md:w-6/12 w-full text-start space-y-4">
                <h2 className="text-[35px] font-bold">Black Linen Boxes</h2>
                <h3 className=" font-[700] text-[22px]">Strong Boxes for Special Things: Rigid Boxes Explained!</h3>
                <p className="text-[#1f1f1f77] text-[14px]">Rigid boxes are like super strong and unbreakable homes for extraordinary things. The manufacturers make these boxes using special materials to keep toys, makeup, and nice things protected. Additionally, people use printed rigid boxes to make things look extra special by painting them with cool colors and designs.</p>
                <button className=" border-1 border-[#5a56e9] rounded-[10px] bg-[#5a56e9] py-[12px] px-[20px] text-[#fff] text-[15px]">Get Quote</button>
                </div>
                <div className="md:w-6/12 w-full">
                <img src={rigid} alt="" className="rounded-[10px] w-full" />
                </div>
        
            </div>,
    ];
  return (
    <>

    <div className='grid grid-cols-12'>

        <div className=' col-span-2'>
             <div className='flex flex-col space-x-2  overflow-x-auto gap-3 justify-center'>
    {tabs.map((tab,index)=>(
        <div>
        <Button onClick={()=> setActiveTab(index)}
        key={`${index}`} 
        className={`py-[15px] w-full whitespace-nowrap  px-[35px] border border-[#E9E9E9] rounded-lg ${activeTab === index ?'bg-[#5a56e9] text-white':''} hover:bg-[#5a56e9] hover:text-[#fff] text-[fff]`} bgColor={'#fff'} textColor={'#000'} children={tab}
        />
        </div>
    ))}
  </div>

        </div>
        <div className=' col-span-10'>
             <div className="w-full mt-5">
        {contents && contents.map((content,index)=>{
           if(activeTab === index ){
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
