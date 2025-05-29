import React from 'react'

function Container({
  children,
  className='',
}) {
  return (
    <div className={`max-w-[1400px] p-2 mx-auto ${className}`}>{children}</div>
  )
}

export default Container
