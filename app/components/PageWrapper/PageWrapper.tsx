import React from 'react'
import ToggleTheme from "@/app/components/ToggleTheme/ToggleTheme";

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative h-[100vh] overflow-y-scroll'>
      <div className="bg-land dark:bg-dark-land bg-cover bg-fixed text-slate-800">
        {children}
      </div>
      <ToggleTheme />
    </div>
  )
}

export default page