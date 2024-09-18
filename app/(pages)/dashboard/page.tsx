'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAxios } from "@hooks/all"
import { formatRawNumber } from '@utils/validator'
import ReceiveMoneyIcon from "@/public/receive-money.png"
import CollectMoneyIcon from "@/public/collect-money.png"
import AvailableUnitIcon from "@/public/available-unit.png"
import TotalClientIcon from "@/public/total-client.png"
import TotalAgentIcon from "@/public/total-agent.png"
import TopAgentIcon from "@/public/top-agent.png"
import TopAgentCollectible from "@/public/agent-collectible.png"

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
const Page = () => {
  const { get } = useAxios()
  const [data, setData] = useState<dataProps>()

  const handleGetStatistics = async () => {
    const response = await get({
      url: "/statistics",
      requiresAuth: true,
      authPrefix: 'Bearer'
    })
    if (response.result) {
      setData(response.data)
    }
  }

  const formatNumber = (num: number, dec: number = 2, lead: string = '₱') => {
    return formatRawNumber(num, dec, lead)
  }

  const Item = ({ children, title, className, icon }: { children: React.ReactNode, title: string, className?: string, icon: HTMLImageElement }) => {
    return <div className={`flex gap-3 items-center flex-col sm:flex-row  ${className}`}>
      <Image src={icon} className=' h-[50px] w-[50px] md:h-[50px] md:w-[50px] ' alt="icon" />
      <div className={`flex flex-col items-center sm:items-start`}>
        <div className="font-bold text-[16px] lg:text-[17px] text-center sm:text-start">{title}</div>
        <div className="text-[14px] md:text-[20px] text-center sm:text-start">{children}</div>
      </div>
    </div>
  }

  useEffect(() => {
    handleGetStatistics()
  }, [])


  
    return (
      <>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <Item title="Total Collectibles" className='my-3' icon={CollectMoneyIcon as HTMLImageElement}>
            <span className='text-green-700 dark:text-green-500 font-bold'>
              {formatNumber(data?.overall_lot.collectibles?? 0)}
            </span>
          </Item>
          <Item title="Total Receivables" className='my-3' icon={ReceiveMoneyIcon as HTMLImageElement}>
            <span className='text-red-700 dark:text-red-500 font-bold '>
              {formatNumber(data?.overall_lot.receivables?? 0)}
            </span>
          </Item>
          <Item title="Units" className='my-3' icon={AvailableUnitIcon as HTMLImageElement}>
            <span className='text-slate-500 font-bold dark:text-white'>
              {formatNumber(data?.available_units?? 0, 0, '')}
            </span>
          </Item>
          <Item title="Total Client" className='my-3' icon={TotalClientIcon as HTMLImageElement}>
            <span className='text-slate-500 font-bold dark:text-white'>
              {formatNumber(data?.client_count?? 0, 0, '')}
            </span>
          </Item>
          <Item title="Total Agent" className='my-3' icon={TotalAgentIcon as HTMLImageElement}>
            <span className='text-slate-500 font-bold dark:text-white'>
              {formatNumber(data?.agent_count?? 0, 0, '')}
            </span>
          </Item>
          <Item title="Top Agent" className='my-3' icon={TopAgentIcon as HTMLImageElement}>
            <span className='text-slate-500 font-bold dark:text-white'>
              {data?.top_agent[0].agent_name}
            </span>
          </Item>
          <Item title="Top Agent Collectibles" className='my-3' icon={TopAgentCollectible as HTMLImageElement}>
            <span className='text-orange-700 dark:text-orange-500 font-bold'>
              {formatNumber(data?.top_agent[0].collectibles)}
            </span>
          </Item>
        </div>

      </>
    )



}

export default Page