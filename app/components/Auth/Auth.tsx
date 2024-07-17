'use client'
import { useLayoutEffect, useState } from "react"
import { useCookie } from "@hooks/all"
import { redirect } from 'next/navigation'

type AuthProps = {
  children: React.ReactNode
}

const Auth = ({ children }: AuthProps) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)

  useLayoutEffect(() => {
    const { getCookie } = useCookie();
    const listOfPathnames = ["/login", "/"];

    if (getCookie('user_token') && listOfPathnames.indexOf(window.location.pathname) != -1) {
      redirect('/dashboard')
    } else if (getCookie('user_token') == '' && listOfPathnames.indexOf(window.location.pathname) == -1) {
      redirect('/')
    }

    setHasLoaded(true)

  }, [])

  return hasLoaded ? children : <div className="h-screen w-screen"/>
}

export default Auth