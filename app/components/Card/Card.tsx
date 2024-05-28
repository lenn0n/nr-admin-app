import React from 'react'

const Card = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className='bg-white glass p-4 md:p-10 fadeIn dark:bg-gray-800 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600'>
      {children}
    </div>
  )
}

export default Card