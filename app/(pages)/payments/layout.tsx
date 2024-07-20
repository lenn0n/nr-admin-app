import React from 'react'

import MainWrapper from '@/app/components/PageWrapper/MainWrapper'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <div className='flex items-center gap-2' >
        <div className="font-bold text-xl dark:text-white mt-3 pb-3">Payments</div>
      </div>
      <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
      {children}
    </MainWrapper>
  )
}

export default Layout