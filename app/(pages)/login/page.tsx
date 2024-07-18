'use client'
import Image from "next/image"
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { useAxios, useCookie, useDispatch, useEncryption } from "@hooks/all";
import { openModal, closeModal } from "@/app/store/reducers/modal";

import Input from "@/app/components/Forms/Input";
import Button from "@/app/components/Forms/Button";
import NRLogo from "@/public/nr.png"
import Link from "@/app/components/Navs/Link";
import Card from "@/app/components/Card/Card";
import Form from "@/app/components/Forms/Form";
import ErrorModal from "@/app/components/Modal/ErrorModal";

export default function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { encode } = useEncryption()
  const { post, isLoading } = useAxios()
  const { setCookie } = useCookie()
  const [password, setPassword] = useState<string | number>()

  const getCurrentYear = () => {
    const date = new Date()
    return date?.getFullYear()
  }

  const handleLogin = async () => {
    if (password) {
      // Validate password
      const response = await post({
        url: '/login',
        requiresAuth: false,
        payload: { password }
      })

      if (response.result) {
        // Set token to browser's cookies
        setCookie({
          name: 'user_token',
          value: encode(response.access),
          days: 7
        })
        // Redirect to dashboard
        router.push('/dashboard', { scroll: true })
      } else {
        dispatch(openModal({ id: 'error-modal' }))
      }

    }
  }

  return (
    <>
      <ErrorModal
        message="Incorrect password, please try again."
      >
        <Button
          buttonStyle="solid"
          type="button"
          className="!bg-gray-200 !border-none !text-black hover:!bg-gray-300"
          onClick={() => { dispatch(closeModal()) }}>
          Close
        </Button>
      </ErrorModal>
      <div className="flex items-center justify-center h-[100vh]">
        <Card>
          <div className="flex flex-col m-auto w-100 items-center xl:w-[300px] rounded-xl ">
            <div className="">
              <Image className="object-cover w-[100px] h-[100px] opacity-90" src={NRLogo} alt="" />
            </div>
            <div className="title font-bold text-2xl dark:text-white">NR Login </div>
            <div className="text-sm">Welcome</div>
            <Form onSubmit={handleLogin} className=" w-full">
              <Input
                autoFocus
                value={password}
                onChange={(password: string | number) => { setPassword(password) }}
                type="password"
                wrapperClassName="mt-5"
                placeholder="Enter Admin Password"
              />

              <div className="mt-2">
                <Button buttonStyle="solid" type="submit" isLoading={isLoading}>
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
            </Form>

            <Link>
              <div className="mt-5 font-bold text-[14px]" >
                Forgot Password?
              </div>
            </Link>

            <div className="mt-4 text-[14px] text-center">
              Copyright © {getCurrentYear()} <span className="">NR Realty Development</span>
            </div>
          </div>

        </Card>
      </div>
    </>
  );
}
