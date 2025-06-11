import React, { useState} from 'react'
import Button from '../Button'
import PersonalInfo from './PersonalInfo'
import ProductDetail from './ProductDetail'

function Form() {
    const [page,setPage] = useState(0)
    const [formData,setFormData] = useState({
    // Personal Information Field
        fullName:"",
        companyName: "",
        email: "",
        phoneNumber:"",
    // Product Specification

    
    })
    

    const PageTitles = [<h3 className='text-[20px] font-semibold'>Product Specification, </h3>,<h3 className='text-[20px] font-semibold'> Personal Information</h3>]
    const  pageDisplay = ()=>{
        if(page === 0){
            return <ProductDetail formData={formData} setFormData={setFormData}/>
        }else{
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        }
    }

    
  return (
    <>
    <div className='form'>

        <div className='form-container'>
            <div className='header'>
                <h3>{PageTitles[page]}</h3>
            </div>
            <div className='body'>
                {pageDisplay()}
            </div>
            <div className='footer flex justify-between mt-3'>
                <Button 
                onClick={()=>{setPage((curPage)=>curPage -1)}}
                disabled={page === 0} 
                children={"Prev"}/>
                <Button
                 onClick={()=>{
                    if(page ===1){
                        alert("Your Form Is submit")

                    }else{
                        setPage((curPage)=> curPage +1)}}
                    }
                    
                 
                 children={page===1?"submit":"Next"}
             
                 
                 />
           
                             </div>
        </div>
      
    </div>
    </>
  )
}

export default Form
