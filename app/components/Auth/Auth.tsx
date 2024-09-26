'use client'
import { useLayoutEffect } from "react"
import { redirect } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client';
type AuthProps = {
  children: React.ReactNode
}

const Auth = ({ children }: AuthProps) => {
  const { user, isLoading } = useUser();
  useLayoutEffect(() => {
    const listOfPathnames = ["/login", "/"];
    if (!isLoading) {
      if (user && listOfPathnames.indexOf(window.location.pathname) != -1) {
        redirect('/dashboard')
      } else if (!user && listOfPathnames.indexOf(window.location.pathname) == -1) {
        redirect('/')
      }
    }
  }, [isLoading])

  return !isLoading ? children : <></>
}

export default Auth