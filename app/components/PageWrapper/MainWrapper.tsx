
import Card from '@/app/components/Card/Card'
import Logout from '@/app/components/PageWrapper/Logout'
import Image from "next/image"
import { HomeModernIcon, CreditCardIcon, UserGroupIcon, UsersIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid'

import NRLogo from "@/public/nr.png"

type MainWrapperProps = {
  children: React.ReactNode
}
const MainWrapper = ({ children }: MainWrapperProps) => {

  return (
    <>
      <div className=" flex lg:items-center pt-12 lg:pt-0 justify-center h-[100%] lg:h-[100vh]">
        <div className="flex flex-row flex-wrap justify-center w-full gap-4 mx-4">
          <div className="basis-full lg:basis-1/5 py-5">
            <Card>
              <div className='flex items-center gap-2' >
                <Image className="object-cover w-[50px] h-[50px] opacity-90" src={NRLogo} alt="" />
                <div className="font-bold text-xl dark:text-white"> NR Realty</div>
              </div>
              <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
              <div className="flex flex-row lg:flex-col justify-between">
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-green-600 dark:text-green-500" role="button">
                  <HomeModernIcon className="h-6 w-6" />
                  <div className="font-bold hidden md:block">Dashboard</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <CreditCardIcon className="h-6 w-6" />
                  <div className="font-bold hidden md:block">Payments</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <UserGroupIcon className="h-6 w-6" />
                  <div className="font-bold hidden md:block">Client</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <UsersIcon className="h-6 w-6" />
                  <div className="font-bold hidden md:block">Agent</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <BuildingOffice2Icon className="h-6 w-6" />
                  <div className="font-bold hidden md:block">Branch</div>
                </div>
              </div>
              <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
              <Logout />
            </Card>
          </div>
          <div className="basis-full lg:basis-3/4 xl:basis-2/4 overflow-hidden py-5">
            <Card>
              {children}
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainWrapper