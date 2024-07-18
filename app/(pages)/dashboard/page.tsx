'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import MainWrapper from '@/app/components/PageWrapper/MainWrapper'
import { useAxios } from "@hooks/all"
import { formatRawNumber } from '@/app/utils/validator'
import ReceiveMoneyIcon from "@/public/receive-money.svg"
import CollectMoneyIcon from "@/public/collect-money.svg"
import AvailableUnitIcon from "@/public/available-unit.svg"
import TotalClientIcon from "@/public/total-client.svg"
import TotalAgentIcon from "@/public/total-agent.svg"
import TopAgentIcon from "@/public/top-agent.svg"
import TopAgentCollectible from "@/public/agent-collectible.svg"

type dataProps = {
  overall_lot: {
    collectibles: number,
    receivables: number
  },
  available_units: number,
  client_count: number,
  agent_count: number,
  top_agent: any
}
const Dashboard = () => {
  const { get } = useAxios()
  const [data, setData] = useState<dataProps>()

  const handleGetStatistics = async () => {
    const response = await get({
      url: "/statistics",
      requiresAuth: true,
      authPrefix: 'Bearer'
    })
    if (response.result) {
      setData(response)
    }
  }

  const formatNumber = (num: number, dec: number = 2, lead: string = '₱') => {
    return formatRawNumber(num, dec, lead)
  }

  const Item = ({ children, title, className, icon }: { children: React.ReactNode, title: string, className?: string, icon: HTMLImageElement }) => {
    return <div className={`flex gap-3 items-center justi  ${className}`}>
      <Image src={icon} className='hidden sm:block h-[30px] w-[30px] md:h-[50px] md:w-[50px] ' alt="icon" />
      <div className={`flex flex-col`}>
        <div className="font-bold text-[16px] lg:text-[17px]">{title}</div>
        <div className="text-[14px] md:text-[20px] ">{children}</div>
      </div>
    </div>
  }

  useEffect(() => {
    handleGetStatistics()
  }, [])


  if (!data) {
    return (<>Loading....</>)
  } else {
    return (
      <MainWrapper>
        <div className='flex items-center gap-2' >
          <div className="font-bold text-xl dark:text-white mt-3 pb-3">My Dashboard</div>
        </div>
        <div className="border-b border-slate-400 mb-5 mt-3 opacity-30"></div>
        <div className='grid grid-cols-2 md:grid-cols-3'>
          <Item title="Total Collectibles" className='mb-12' icon={CollectMoneyIcon}>
            <span className='text-green-700 dark:text-green-500 font-bold'>{formatNumber(data.overall_lot.collectibles)}</span>
          </Item>
          <Item title="Total Receivables" className='mb-12' icon={ReceiveMoneyIcon}>
            <span className='text-orange-600 dark:text-orange-500 font-bold'>{formatNumber(data.overall_lot.receivables)}</span>
          </Item>
          <Item title="Units" className='mb-12' icon={AvailableUnitIcon}>
            <span className={`font-bold ${data.available_units === 0 ? 'text-red-700 dark:text-red-500' : ''}`}>
              {formatNumber(data.available_units, 0, '')}</span>
          </Item>
          <Item title="Total Client" className='mb-12' icon={TotalClientIcon}>
            <span className='dark:text-white'>{formatNumber(data.client_count, 0, '')}</span>
          </Item>
          <Item title="Total Agent" className='mb-12' icon={TotalAgentIcon}>
            <span className='dark:text-white'>{formatNumber(data.agent_count, 0, '')}</span>
          </Item>

        </div>
        <div className='grid grid-cols-2 md:grid-cols-3'>
          <Item title="Top Agent" icon={TopAgentIcon}>
            <span className='dark:text-white'>{data.top_agent[0].agent_name}</span>
          </Item>
          <Item title="Collectibles" icon={TopAgentCollectible}>
            <span className='dark:text-white'> {formatNumber(data.top_agent[0].collectibles)}</span>
          </Item>
        </div>
      </MainWrapper>
    )
  }


}

export default Dashboard