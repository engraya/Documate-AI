import React from 'react'

function PagesWrapper({ children } : { children : React.ReactNode}) {
  return (
    <div className='px-4 md:flex md:items-center md:px-16 md:py-8 lg:max-w-7xl'>{children}</div>
  )
}

export default PagesWrapper