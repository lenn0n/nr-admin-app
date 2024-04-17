'use client'
import { useEffect, useState } from "react";
import Image from "next/image"
import Input from "@/app/components/forms/Input";
import Button from "@/app/components/forms/Button";
import NRLogo from "@/public/nr.png"
import Link from "@/app/components/navs/Link";
export default function Login() {
  const [date, setDate] = useState<Date>()

  const displayDate = () => {
    return date?.toLocaleString();
  }

  const getCurrentYear = () => {
    return date?.getFullYear()
  }
  useEffect(() => {
    setInterval(() => { setDate(new Date) }, 1000)
  }, [])

  return (
    <div className="
    p-10 fadeIn
    dark:bg-gray-800 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600
    flex flex-col m-auto w-100 items-center bg-white glass sm:w-[300px] md:w-[40%] xl:w-[400px] h-[100%] rounded-xl ">
      <div className="">
        <Image className="object-cover w-[100px] h-[100px] opacity-90" src={NRLogo} alt="" />
      </div>
      <div className="title font-bold text-2xl dark:text-white">NR Login </div>
      {date ? <div className="text-[13px] fadeIn">{displayDate() || "Hi, Welcome!"}</div> :
        <div>Welcome!</div>
      }

      <Input
        wrapperClassName="mt-5"
        placeholder="Enter Admin Password"
      />

      <div className="mt-2 w-full">
        <Button buttonStyle="solid">
          <div className="flex items-center justify-center gap-2">
            LOGIN
            <svg className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </Button>
      </div>

      <Link>
        <div className="mt-5 font-bold text-[14px]" >
          Forgot Password?
        </div>
      </Link>

      <div className="mt-4 text-[14px] text-center">
        Copyright © {getCurrentYear()} <span className="">NR Realty Development</span>
      </div>
    </div>

  );
}
