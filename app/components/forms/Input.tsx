import { isCallbackValid } from "@utils/validator"

type Props = {
  type?: React.HTMLInputTypeAttribute,
  wrapperClassName?: string,
  placeholder?: string,
  onEnter?: Function,
  onChange?: Function,
  value?: string | number,
  name?: string,
  autoFocus?: boolean
}

const Input = ({
  type = "text",
  name,
  wrapperClassName,
  placeholder,
  onEnter,
  onChange,
  value,
  autoFocus
}: Props) => {

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (isCallbackValid(onEnter) && onEnter){
        onEnter(e)
      }
    }
  }

  const handleOnChange  = (e:  React.ChangeEvent<HTMLInputElement>) => {
    if (isCallbackValid(onChange) && onChange){
      onChange(e.target.value)
    }
  }

  return (
    <div className={`${wrapperClassName} relative w-full`}>
      <input
        name={name}
        autoComplete="false"
        // value={value?? ''}
        autoFocus={autoFocus}
        type={type}
        onChange={handleOnChange}
        onKeyUp={handleOnEnter}
        className={`border
        peer border-lime-500 py-3 px-4 bg-opacity-70 ps-11 block w-full bg-gray-100 border-transparent 
        rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
        disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent 
        dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:text-white 
        `}
        placeholder={placeholder} />
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
        <svg
          className="flex-shrink-0 size-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
          <circle cx="16.5" cy="7.5" r=".5"></circle>
        </svg>
      </div>
    </div>
  )
}

export default Input