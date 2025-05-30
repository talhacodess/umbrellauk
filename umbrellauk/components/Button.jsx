import React from 'react'

function Button(
    {
        children,
        type= 'button',
        className = '',
        onClick,
        key,
        disabled,
        ...Props

    }) {
  return <button  onClick={onClick} className={`py-[12px] px-[24px]  rounded-[8px] hover:bg-[#293453] hover:text-[#fff]  bg-[#293453]  ${className} md:text-[15px]  `}>{children}</button>
}

export default Button