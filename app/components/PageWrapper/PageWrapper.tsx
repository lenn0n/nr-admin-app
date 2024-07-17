'use client'
import React from 'react'
import ToggleTheme from "@/app/components/ToggleTheme/ToggleTheme";
import Auth from "@/app/components/Auth/Auth";

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative h-[100vh] overflow-y-scroll'>
      <div className="bg-land dark:bg-dark-land bg-cover bg-fixed text-slate-800">
        <Auth>
          {children}
        </Auth>
        <div className="absolute bottom-0 w-full">
          <div className="flex items-center text-center text-[12px] justify-center text-white font-bold pb-2">
            Powered By NextJS, TypeScript, Tailwind and Redux.
          </div>
        </div>
      </div>
      <ToggleTheme />
    </div>
  )
}

export default page