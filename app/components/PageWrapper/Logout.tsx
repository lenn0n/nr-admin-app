'use client'
import React from 'react'

import { useCookie } from "@hooks/all"
import { useRouter } from 'next/navigation'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid'
const Logout = () => {
  const { removeCookie } = useCookie()
  const router = useRouter()
  const handleLogout = () => {
    removeCookie({
      name: 'user_token',
      domain: window.location.hostname
    })
    router.push('/')
  }
  return (
    <div onClick={handleLogout} className="flex flex-row gap-2 mb-0 hover:text-slate-400 text-red-700 dark:text-red-500" role="button">
      <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
      <div className="">Logout</div>
    </div>
  )
}

export default Logout