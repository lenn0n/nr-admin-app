"use client"
import { useState, useEffect } from "react"
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  const handleToggle = () => {
    const mode = theme == 'light' ? 'dark' : theme == 'dark' ? 'light' : 'light';
    setTheme(mode)
  }

  const checkTheme = (): boolean => {
    try {
      return localStorage?.getItem("theme") == 'dark' ? true : false
    } catch (error) {
      localStorage.setItem("theme", "dark")
      return false
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
    <>
      {isMounted && <div className="absolute right-0 mt-5 me-5">
        <div className="relative items-center justify-center flex">
          <input onChange={handleToggle} defaultChecked={checkTheme()} type="checkbox" id="toggle-switch" className="peer relative shrink-0 w-11 h-6 scale-150 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-whsite disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-gray-100 checked:border-white focus:checked:border-white dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-white dark:checked:border-white dark:focus:ring-offset-gray-600 focus:border-none focus:shadow-none before:inline-block before:size-5 before:bg-white checked:before:bg-black-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white" />
          <label htmlFor="toggle-switch" className="sr-only">switch</label>
          <label role="button" htmlFor="toggle-switch" className="hidden peer-checked:block absolute top-0 right-[-3px]">
            <MoonIcon className="h-6 w-6 text-black" />
          </label>
          <label role="button" htmlFor="toggle-switch" className="block peer-checked:hidden absolute top-0 left-[-4px]" >
            <SunIcon className="h-6 w-6 text-black" />
          </label>
        </div>

      </div>}
    </>
  )
}

export default ToggleTheme