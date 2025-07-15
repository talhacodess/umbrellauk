import React from 'react'

function ProductDetail({ formData, setFormData }) {
  console.log(formData, 'formData in ProductDetail');
  return (
    <form action="">
      <div className=' grid md:grid-cols-5 grid-cols-3 text-[14px] gap-1 space-y-3 '>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Box style</label>
          <input 
          type="text"
          value={formData.boxStyle}
          placeholder='Box Style'
          onChange={(event) => setFormData({ ...formData, boxStyle: event.target.value })}
          className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium '/>
        </div>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Size (Length) </label>
          <input 
           type="number" 
           placeholder='Length'
           value={formData.lengthBox} 
           onChange={(event) => setFormData({ ...formData, lengthBox: event.target.value })} 
           className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium' />
        </div>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Size (width)</label>
          <input
           type="number"
           placeholder='Width'
           onChange={(e)=>setFormData({...formData, widthBox: e.target.value})}
           value={formData.widthBox}
           className='w-full rounded-[8px] h-[40px] border-[#1a111187] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'/>
        </div>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Size (Depth) </label>
          <input
          type="number"  
          placeholder='Depth'
          onChange={(e)=>setFormData({...formData, depthBox: e.target.value})}
          value={formData.depthBox}
          className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium' />
        </div>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Unit</label>
          <select 
          name="" 
          id=""  
          onChange={(e)=>setFormData({...formData, unitBox: e.target.value})}
          value={formData.unitBox}
          placeholder='Unit'
          className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
            <option value="inches">inches</option>
          </select>
        </div>
      </div>
      <div className='grid md:grid-cols-5 grid-cols-3 text-[14px] gap-1  space-y-3'>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Stock</label>
          <select
           name=""
           id="" 
           onChange={(e)=>setFormData({...formData, stockBox: e.target.value})}
           value={formData.stockBox}
           className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
            <option value="12pt Cardboard">12pt Cardboard</option>
            <option value="14pt Cardboard">14pt Cardboard</option>
            <option value="16pt Cardboard">16pt Cardboard</option>
            <option value="18pt Cardboard">18pt Cardboard</option>
            <option value="20pt Cardboard">20pt Cardboard</option>
            <option value="22pt Cardboard">22pt Cardboard</option>
            <option value="24pt Cardboard">24pt Cardboard</option>
            <option value="White SBS C1S C2S ">White SBS C1S C2S </option>
            <option value="Corrugated">Corrugated</option>
            <option value="Rigid">Rigid</option>
            <option value="Kraft">Kraft</option>
            <option value="Linen">Linen</option>
          </select>
        </div>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Colors</label>
          <select
           onChange={(e)=>setFormData({...formData, colorBox: e.target.value})}
           value={formData.colorBox}
          className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
            <option value="Plain (No Printing)">Plain (No Printing)</option>
            <option value="1 Color">1 Color</option>
            <option value="2 Color">2 Color</option>
            <option value="3 Color">3 Color</option>
            <option value="4 Color">4 Color</option>
            <option value="4/1 Color">4/1 Color</option>
            <option value="4/2 Color">4/2 Color</option>
            <option value="4/3 Color">4/3 Color</option>
            <option value="4/4 Color">4/4 Color</option>
          </select>
        </div>
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Printing Sides</label>
          <select
           onChange={(e)=>setFormData({...formData, printingBox: e.target.value})}
           value={formData.printingBox}
          className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
            <option value="inside">inside</option>
            <option value="outside">outside</option>
            <option value="Both(Inside & Outside)">Both(Inside & Outside)</option>
          </select>
        </div>
      
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Quantity</label>
          <input 
          type="number"
          placeholder='Quantity'
           onChange={(e)=>setFormData({...formData, quantityBox: e.target.value})}
           value={formData.quantityBox}
          className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium' />
        </div>
      
        <div className=''>
          <label htmlFor="" className=' text-[16px]'>Add-Ons</label>
          <select 
          onChange={(e)=>setFormData({...formData, addonBox: e.target.value})}
          value={formData.addonBox}
          className='w-full rounded-[8px] h-[40px] border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'>
            <option value=""></option>
            <option value="Foiling">Foiling</option>
            <option value="Spot UV">Spot UV</option>
            <option value="Embossing">Embossing</option>
            <option value="Debossing">Debossing</option>
            <option value="Handles">Handles</option>
            <option value="Inserts">Inserts</option>
            <option value="Windows">Windows</option>
          </select>
        </div>
      </div>
      <div className='grid md:grid-cols-12 grid-cols-1 text-[14px] gap-1 space-y-3  '>



        <div className="space-y-2 col-span-4">
  <label className="block text-lg font-medium text-gray-700">
    Upload Your Design (Max Size 5MB)<br />
    <span className="text-sm text-gray-500">
      Allowed File Types: <b>png, pdf, jpg, jpeg, webp</b> </span>
  </label>

  <div className="flex items-center space-x-4">
  <label
    htmlFor="file-upload"
    className="cursor-pointer inline-block bg-[#293453] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-[#ff931e] transition-colors"
  >
    Choose File
  </label>

  <span id="file-name" className="text-sm text-gray-600">
    {formData.uploadBox ? formData.uploadBox : "No file chosen"}
  </span>

  <input
    id="file-upload"
    type="file"
    accept=".png,.pdf,.jpg,.jpeg,.webp"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files[0];
      const fileName = file ? file.name : "No file chosen";
      setFormData({ ...formData, uploadBox: fileName });
    }}
  />
</div>

</div>


        <div className='col-span-8'>
          <label htmlFor="" className=' text-[16px]'>Description</label>
          <textarea 
          rows={3}
           onChange={(e)=>setFormData({...formData, descBox: e.target.value})}
           value={formData.descBox}
          className='w-full rounded-[8px]  border-[#d9d9d987] border bg-white placeholder:text-[#49494987] placeholder:p-4 placeholder:font-medium'></textarea>
        </div>
      </div>
    </form>
  )
}

export default ProductDetail
