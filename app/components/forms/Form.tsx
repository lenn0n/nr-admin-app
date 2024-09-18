import React from 'react'
import { isCallbackValid } from '@utils/validator'

type FormProps = {
  children: React.ReactNode,
  onSubmit?: Function,
  className?: string
}

const Form = ({
  children,
  onSubmit,
  className
}: FormProps) => {

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement);
    if (isCallbackValid(onSubmit) && onSubmit){
      onSubmit(form)
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className={className}>
      {children}
    </form>
  )
}

export default Form