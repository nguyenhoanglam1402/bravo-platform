import { Popover } from 'antd'
import ToolbarButton from '../button'
import { ReactNode, useState } from 'react'
import './style.css'

export default function ToolbarPropover({ children, icon }: { children: ReactNode; icon: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  return (
    <div className='custom-popover'>
      <Popover content={children} placement='bottom' trigger='click' open={open} onOpenChange={handleOpenChange}>
        <ToolbarButton onClick={() => {}} actived={open}>
          {icon}
        </ToolbarButton>
      </Popover>
    </div>
  )
}
