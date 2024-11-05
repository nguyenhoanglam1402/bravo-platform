import { ReactNode } from 'react'
import { mergeClasses } from '../../../../../utils/styles/class'

interface IProps {
  children: ReactNode
  onClick: () => void
  actived?: boolean
  disabled?: boolean
}

export default function ToolbarButton({ children, onClick, actived = false, disabled = false }: IProps) {
  return (
    <button
      onClick={onClick}
      className={mergeClasses(
        'text-sm items-center justify-center flex border-none rounded p-[5px] w-[34px] h-[34px]',
        actived ? 'bg-[#e0e0e0]' : '',
        disabled ? 'text-gray-500' : ''
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
