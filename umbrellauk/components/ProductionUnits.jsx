import React from 'react'
import UnitBG from '../src/assets/bg-unit.webp'
import youtube from '../src/assets/youtube-unit.svg'

function ProductionUnits() {
    return (
        <div className=''>

            <div className=' h-[300px] bg-contain bg-no-repeat bg-center relative' style={{ backgroundImage: `url(${UnitBG})` }}>

                <img src={youtube} alt="" height={60} width={80} className=' absolute left-[50%] right-[50%] top-30' />


            </div>
            <h2 className='md:text-[35px] text-[20px] py-3 font-semibold text-center '>Umbrella Custom Packaging have Production Units<br /> Across the Globe</h2>

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

            </div>

        </div>
    )
}

export default ProductionUnits
