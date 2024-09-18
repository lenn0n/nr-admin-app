'use client'
import Image from "next/image"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useAxios, useCookie, useEncryption } from "@hooks/all";
import Input from "../../components/Forms/Input";
import Button from "@components/Forms/Button";
import NRLogo from "@/public/nr.png"
import Link from "@components/Navs/Link";
import Card from "@components/Card/Card";
import Form from "@components/Forms/Form";
import useModal, { Modal } from "@hooks/useModal"

export default function Login() {
  const router = useRouter()
  const { encode } = useEncryption()
  const { post, isLoading } = useAxios()
  const { setCookie } = useCookie()
  const { openModal, closeModal, modalProps, setModalProps } = useModal()
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

      if (response.result && response.data.access) {
        // Set token to browser's cookies

        setCookie({
          name: 'user_token',
          value: encode(response.data.access),
          days: 7
        })
        // Redirect to dashboard
        router.push('/dashboard', { scroll: true })
      } else {
        setModalProps({
          title: "Error Password",
          className: 'bg-green-700 bg-opacity-90 text-white text-[14px]',
          headerClassName: 'text-white border-green-800 !text-[15px]',
          showModal: true
        })
    
      }

    }
  }

  return (
    <>
      <Modal props={modalProps} handleClose={closeModal}>
        <div className='p-5 text-center'>
          Looks like you have entered invalid password.
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
        <button className='bg-green-600 hover:bg-green-800 py-1 px-4 rounded-md' onClick={closeModal}>Close</button>
        </div>
      </Modal>
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
