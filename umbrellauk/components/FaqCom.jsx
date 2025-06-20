import React, { useState } from 'react'
import { FaQuestion } from "react-icons/fa6";
import { LuArrowDown } from "react-icons/lu";


function FaqCom({ title, answer }) {
    const [accordion, setAccordion] = useState(false);

    const toggleAccordion = () => setAccordion(prev => !prev);
    return (
        <>
            <div>
                <button className={`w-full flex justify-between items-center text-start border border-[#D9D9D987] p-3 rounded-xl text-lg font-semibold text-[#1f212f]'  ${accordion? 'text-[#FF931E] border border-black':'text-[#000]'}`} onClick={toggleAccordion}>
                    <span>{title}</span>
                    <span>{accordion ? <LuArrowDown size={30} className='bg-black text-[#fff] rounded-full p-1' /> : <FaQuestion size={30} className='bg-black text-[#fff] rounded-full p-1' />}</span>
                </button>
                <div className={`grid overflow-hidden transition-all duration-400 ease-in-out text-slate-700 text-sm ${accordion ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>

                    <div className='overflow-hidden text-start p-3 border border-[#D9D9D987] rounded-xl text-sm my-1'>
                        {answer}

                    </div>

                </div>

            </div>
        </>

    )
}

export default FaqCom
