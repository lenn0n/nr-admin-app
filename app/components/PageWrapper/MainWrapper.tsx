
'use client'
import { useState, useEffect } from 'react'
import Card from '@/app/components/Card/Card'
import Logout from '@/app/components/PageWrapper/Logout'
import Image from "next/image"
import { HomeModernIcon, CreditCardIcon, UserGroupIcon, UsersIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid'

import NRLogo from "@/public/nr.png"
import { useRouter, usePathname } from 'next/navigation'

type MainWrapperProps = {
  children: React.ReactNode
}

type SideLinkProps = { title: string, Icon: React.ReactNode, url: string }

const MainWrapper = ({ children }: MainWrapperProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [links, setLinks] = useState<SideLinkProps[]>([]);


  const SideLink = ({ title, Icon, url }: SideLinkProps) => {
    return (<div
      key={url}
      className={`flex flex-row gap-2 mb-4 hover:text-slate-400 
        ${isCurrentPath(url) ? ' text-green-600 dark:text-green-500' : 'text-slate-700 dark:text-slate-200'}`}
      role="button"
      onClick={() => { router.replace(url) }}>
      {Icon}
      <div className="font-bold hidden md:block">{title}</div>
    </div>)
  }

  const isCurrentPath = (url: string) => {
    return String(window.location.pathname).includes(url)
  }

  useEffect(() => {
    const links = [
      {
        title: 'Dashboard',
        url: '/dashboard',
        Icon: <HomeModernIcon className="h-6 w-6" />
      },
      {
        title: 'Payments',
        url: '/payments',
        Icon: <CreditCardIcon className="h-6 w-6" />
      },
      {
        title: 'Clients',
        url: '/clients',
        Icon: <UserGroupIcon className="h-6 w-6" />
      },
      {
        title: 'Agents',
        url: '/agents',
        Icon: <UsersIcon className="h-6 w-6" />
      },
      {
        title: 'Branches',
        url: '/branches',
        Icon: <BuildingOffice2Icon className="h-6 w-6" />
      },
    ]
    setLinks(links)
  }, [pathname])

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/dashboard':
        return 'Dashboard'
      case '/payments':
        return 'Payments'
      case '/clients':
        return 'Clients'
      case '/agents':
        return 'Agents'
      case '/branches':
        return 'Branches'
      default:
        return 'Menu'
    }
  }

  const isOutsideLink = () => {
    const listOfPathnames = ["/login", "/"];
    return listOfPathnames.indexOf(pathname) != -1
  }


  return isOutsideLink() ? children :
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
              {links?.length > 0 && links.map((data: SideLinkProps) =>
                <SideLink key={data.url} title={data.title} url={data.url} Icon={data.Icon} />
              )}
            </div>
            <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
            <Logout />
          </Card>
        </div>
        <div className="basis-full lg:basis-3/4 xl:basis-2/4 overflow-hidden py-5">
          <Card>
            <div className='flex items-center gap-2' >
              <div className="font-bold text-xl dark:text-white mt-3 pb-3">{getPageTitle(pathname)}</div>
            </div>
            <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
            {children}
          </Card>
        </div>
      </div>
    </div>
}



export default MainWrapper