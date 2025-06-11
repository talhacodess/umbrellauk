import React from 'react'


function PersonalInfo({formData,setFormData}) {


  return (
    <div className='grid grid-cols-2 text-[14px] gap-1 space-y-4'>
      <div className=''>
      <label htmlFor="" className='text-[16px]'>Full Name</label>
      <input
       type="text"
       className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
       value={formData.fullName}
       onChange={(e)=>setFormData({...formData,fullName: e.target.value})}
       placeholder='Name'
       />
      </div>
      <div className=''>
      <label htmlFor="" className='text-[16px]'>Company Name</label>
      <input 
      type="text" 
      className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
      value={formData.companyName}
      onChange={(e)=>setFormData({...formData, companyName: e.target.value})}
      placeholder='Company Name'
      />
      </div>
      <div className='' >
      <label htmlFor="" className='text-[16px]'>Email</label>
      <input
       type="email" 
       className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
       onChange={(e)=>setFormData({...formData, email: e.target.value})}
       value={formData.email}
       placeholder='Email'
       />
      </div>
      <div className=''>
      <label htmlFor="" className='text-[16px]'>Phone Number</label>
      <input 
      type="tel"
       className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '
       onChange={(e)=>setFormData({...formData,phoneNumber: e.target.value})}
       value={formData.phoneNumber}
       placeholder='Phone Number'
       />
      </div>
      <div className=' space-x-2'>
      <input type="checkbox"
       
       checked={formData.checkFill}  // Binds checkbox to state
       onChange={(event) => setFormData({ ...formData, checkFill: event.target.checked })}  />
      <label htmlFor="">Have you filled all the information correctly?</label>
     
      </div>
     
    </div>

  )
}

export default PersonalInfo
