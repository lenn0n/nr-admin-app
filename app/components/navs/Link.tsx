import React from 'react'

type Props = {
  children: React.ReactNode,
  onClick?: () => {}
}
function Link({
  children,
  onClick
}: Props) {
  return (
    <div role='button' className='text-black hover:text-lime-600 dark:text-lime-500 dark:hover:text-lime-300'>
      {children}
    </div>
  )
}

export default Link