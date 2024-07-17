import React from 'react'
import Card from '../../components/Card/Card'
import { HomeModernIcon, CreditCardIcon, UserGroupIcon, UsersIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid'
import Logout from './logout'
const Dashboard = () => {

  return (
    <div className="">
      <div className="h-[100vh]">
        <div className=" flex items-center justify-center h-[100%]">
          <div className="grid grid-cols-12 gap-4 mx-4">
            <div className="col-span-3 w-[300px] py-5">
              <Card>
                <div className="font-bold text-xl">Admin Panel</div>
                <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-green-600 dark:text-green-500" role="button">
                  <HomeModernIcon className="h-6 w-6" />
                  <div className="font-bold">Dashboard</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <CreditCardIcon className="h-6 w-6" />
                  <div className="">Payments</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <UserGroupIcon className="h-6 w-6" />
                  <div className="">Client</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <UsersIcon className="h-6 w-6" />
                  <div className="">Agent</div>
                </div>
                <div className="flex flex-row gap-2 mb-4 hover:text-slate-400 text-slate-700 dark:text-slate-200" role="button">
                  <BuildingOffice2Icon className="h-6 w-6" />
                  <div className="">Branch</div>
                </div>
                <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
                <Logout/>
              </Card>
            </div>
            <div className="col-span-9 max-h-[80vh] overflow-hidden py-5">
              <div className="">
                <Card>
                  <div className="font-bold">Contents</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard