import React from 'react'
import Modal from './Modal'
import XIcon from "@/public/x.png";
import Image from "next/image"

type ErrorModalProps = {
  children?: React.ReactNode,
  message?: string
}

const ErrorModal = ({ children, message }: ErrorModalProps) => {

  return (
    <Modal id="error-modal" hideHeader={true}>
      {message && <div className='flex items-center justify-center flex-col text-black dark:text-white'>
        <Image className="object-cover w-[100px] h-[100px] opacity-90" src={XIcon} alt="" />
        <div className="font-bold mt-4">Error</div>
        <div className="mb-4 text-[14px]">{message}</div>
      </div>}
      {children}
    </Modal>
  )
}

export default ErrorModal