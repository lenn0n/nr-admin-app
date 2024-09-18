
import React from 'react'
import ToggleTheme from "@components/ToggleTheme/ToggleTheme";
import Auth from "@components/Auth/Auth";
import MainWrapper from './MainWrapper';

const page = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='relative h-[100vh] overflow-y-scroll'>
      <div className="bg-land dark:bg-dark-land bg-cover bg-fixed text-slate-800 min-h-[100%]">
        <MainWrapper>
          <Auth>
            {children}
          </Auth>
        </MainWrapper>
        <div className="mt-[10px] lg:mt-[-26px] w-full">
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