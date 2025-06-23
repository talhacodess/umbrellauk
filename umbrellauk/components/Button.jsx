import React from 'react'

function Button(
    {
        children,
        type= 'button',
        className = '',
        onClick,
        key,
        disabled = false,
        ...Props

    }) {
  return <button  onClick={onClick} className={`py-[12px] px-[24px] cursor-pointer  rounded-[8px] hover:bg-[#293453]   bg-[#293453]  ${className} md:text-[15px`} disabled={disabled} >{children}</button>
}

export default Button