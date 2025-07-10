import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


function TableOfContent() {
  const [openTable, setTableOpen] = useState(true)
  return (
    <>
      <div className='text-sm flex sticky top-5 border-1 rounded-[8px]  w-[280px] h-[60px] justify-between p-5 shadow z-30'>



        <span className=' text-[18px] font-semibold'>Table of Contents</span>
        <button
          className='rounded-lg p-2 '
          onClick={() => setTableOpen(!openTable)}
        ><IoIosArrowDown /></button>




        <div className={`absolute z-50 top-[95%]  inset-x-0 overflow-hidden transition-[height] duration-200 ${openTable ? 'h-60 visible border-x-1 border-b-1 p-5 shadow z-30 rounded-b-[8px] ' : 'h-0 invisible    '} w-[280px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur harum quam. Fugit quod esse magnam asperiores sunt atque nam eaque odit cumque inventore tempora impedit voluptates laboriosam ex iure id deleniti praesentium explicabo alias non blanditiis rerum in, totam a? Nobis qui harum veniam, eveniet explicabo voluptates esse vitae perspiciatis illo assumenda veritatis porro ad magnam consectetur natus enim, placeat impedit sapiente molestias accusantium officiis eaque! Aut illum numquam adipisci reiciendis sunt molestias? Sapiente autem repudiandae iusto distinctio! Ipsa quisquam culpa eaque dolorem enim ea maxime, cum voluptas. Quo laborum asperiores ad exercitationem perferendis? Culpa deleniti dolor adipisci nisi, quos ullam id, dolores reiciendis dicta nesciunt quae, quibusdam eveniet et consectetur architecto nulla expedita enim debitis fugiat incidunt quasi rem explicabo ut eos. Aspernatur quibusdam ab cupiditate voluptatibus error nulla nobis enim. Quis aliquid ab, possimus blanditiis aspernatur voluptatibus officiis sunt culpa dicta delectus libero nam at ea voluptatum eum animi doloribus nobis. Consectetur magni voluptates ipsa saepe aperiam fuga exercitationem quia perferendis eos assumenda porro natus magnam odit deserunt sunt amet officia reprehenderit, error maiores minima aut, est architecto rem! Ipsam voluptatum, iste aut tempore sunt eligendi quae est vitae qui laborum illo corporis officiis, iusto sit assumenda?

        </div>

      </div>
    </>
  )
}

export default TableOfContent
