'use client'
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from "@/app/hooks/all"
import { closeModal } from "@/app/store/reducers/modal";

type ModalProps = {
  id: string,
  title?: string,
  size?: 'sm' | 'md' | 'lg' | 'xl',
  children: React.ReactNode,
  hideHeader?: boolean
}

const Modal = ({
  id,
  title,
  size = 'sm',
  hideHeader,
  children
}: ModalProps) => {

  const dispatch = useDispatch()
  const openModal = useSelector((state) => state.modal.isOpen)
  const modalId = useSelector((state) => state.modal.modalId)

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const modalSize = {
    sm: 'sm:max-w-sm sm:w-full m-3 sm:mx-auto',
    md: 'md:max-w-md md:w-full m-3 md:mx-auto',
    lg: 'lg:max-w-lg lg:w-full m-3 lg:mx-auto',
    xl: 'xl:max-w-4xl xl:w-full m-3 xl:mx-auto',
  }

  const show = (): boolean => {
    return openModal && modalId === id
  }

  return createPortal(<div className="relative">
    <div id="hs-vertically-centered-modal" className={`hs-overlay size-full fixed top-0 start-0 ${show() ? 'z-[80]' : 'z-0 duration-300 ease-out transition-all'} overflow-x-hidden overflow-y-auto pointer-events-none`}>
      <div className={`${show() ? 'mt-7 opacity-100' : 'mt-0 opacity-0'}  duration-500 p-5 ease-out transition-all ${modalSize[size]} min-h-[calc(100%-3.5rem)] flex items-center`}>
        <div className=" bg-opacity-90 w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className={`justify-between items-center py-3 px-4 border-b dark:border-neutral-700 ${hideHeader ? 'hidden' : 'flex'}`}>
            <h3 className="font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
            <button type="button" onClick={handleCloseModal} className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
              <span className="sr-only">Close</span>
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>

    </div>
    <div className={`transition duration fixed ${show() ? '' : 'hidden'} w-screen h-screen z-[79] inset-0 bg-gray-900 bg-opacity-60 dark:bg-opacity-80 dark:bg-neutral-900 `}></div>
  </div>
    , document.getElementById('root-modal') as Element)
}

export default Modal