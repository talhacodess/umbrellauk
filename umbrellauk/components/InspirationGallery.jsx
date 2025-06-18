import React, { useState } from 'react'
import '../styles/GalleryInspiration.css'
import { IoClose } from "react-icons/io5";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

function InspirationGallery({galleryImages}) {
    const [sliderNumber,setSliderNumber] = useState(0)
    const [openModel, setOpenModel] = useState(false)
    const handleOpenModel=(index)=>{
        setSliderNumber(index)
        setOpenModel(true)
    }
    const handleCloseBtn = ()=>{
        setOpenModel(false)
    }

    const prevSlide = ()=>{
        sliderNumber === 0 ? setSliderNumber(galleryImages.length -1) : setSliderNumber(sliderNumber -1) 
        
    }
    const nextSlide = ()=>{
        sliderNumber + 1 === galleryImages.length? setSliderNumber(0): setSliderNumber(sliderNumber + 1)

    }
  return (
    <div>
        {openModel &&
        <div className='sliderwrap'>
            <IoClose className='btnClose' onClick={()=> handleCloseBtn()} />
            <FaCircleArrowLeft className='btnPrev' onClick={()=>prevSlide()} />
            <FaCircleArrowRight  className='btnNext' onClick={()=> nextSlide()} />
            <div className='fullScreenImage'>
                <img src={galleryImages[sliderNumber].img} alt="" />

            </div>
        </div> 

        }
        <br/>
        current Slide number: {sliderNumber}
        <br/>
        Total Slides:{galleryImages.length}

        <div className='gallerywrap '>
            {galleryImages && galleryImages.map((slide,index)=>{
                return(
                    <div 
                    className='single'
                     key={index}
                     onClick={()=> handleOpenModel(index)}
                     >
                        <img src={slide.img} alt="" className='rounded-lg' />

                    </div>
                )
            })}

        </div>
      
    </div>
  )
}

export default InspirationGallery
