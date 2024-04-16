import React from 'react'

type Props = {
  children: React.ReactNode,
  type?: "submit" | "button"
  className?: string,
  buttonStyle?: "solid" | "outline",
  onClick?: () => void
}

function Button({
  children,
  type,
  buttonStyle,
  className = "",
  onClick
}: Props) {

  const buttonStyleList = {
    solid: `w-full justify-center bg-lime-500 py-3 
    px-4 gap-x-2 text-sm font-semibold rounded-lg border border-lime-600 
    text-black-500 hover:text-white hover:border-lime-600 
    hover:bg-lime-600 disabled:opacity-50 disabled:pointer-events-none 
    dark:border-gray-700 dark:text-black dark:hover:text-white dark:hover:border-gray-600`,
    outline: `w-full justify-center bg-opacity-60 py-3 
    px-4 gap-x-2 text-sm font-semibold rounded-lg border border-2 border-lime-600 
    text-lime-600 hover:text-white hover:border-lime-600 
    hover:bg-lime-600 disabled:opacity-50 disabled:pointer-events-none 
    dark:border-lime-700 dark:text-lime-400 dark:hover:text-white dark:hover:border-lime-600`
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={className + " " + buttonStyleList?.[buttonStyle || "solid"]}>
      {children}
    </button>
  )
}

export default Button