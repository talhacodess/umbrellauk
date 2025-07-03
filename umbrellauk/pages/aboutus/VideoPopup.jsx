import React, { useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import video from '../../src/assets/video.mp4'

function VideoPopup({onClose}) {
    const modelRef = useRef()
    let closeModel = (e)=>{
        if(modelRef.current === e.target){
            onClose()
        }
    }
  return (
    <div ref={modelRef} onClick={onClose} className='fixed inset-0 bg-[#00000084] backdrop-blur-sm z-[9999]' >
        <div className='flex flex-col justify-center items-center'>
<button onClick={onClose} className=' absolute right-1 top-2'><RxCross2 /></button>
<div className='bg-[#fff] rounded-[8px]'>
<video src={video} className=' w-[600px] h-[600px] rounded-[8px]' controls={true}></video>
</div>

</div>
       
      
    </div>
  )
}

export default VideoPopup

