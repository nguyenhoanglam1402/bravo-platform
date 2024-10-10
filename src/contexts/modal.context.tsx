import { createContext, ReactNode, useState } from 'react'

interface TModalContextType {
  isOpen: boolean
  content: ReactNode
  footer?: ReactNode
  title?: string
  open: (children: ReactNode, options?: { title?: string; footer?: ReactNode }) => void
  close: () => void
}

export const ModalContext = createContext<TModalContextType>({
  isOpen: false,
  content: '',
  footer: '',
  title: '',
  open: () => {},
  close: () => {}
})

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openState, setOpenState] = useState<boolean>(false)
  const [content, setContent] = useState<ReactNode>()
  const [footer, setFooter] = useState<ReactNode>()
  const [title, setTitle] = useState<string>('')

  const handleOpen = (children: ReactNode, option?: { title?: string; footer?: ReactNode }) => {
    setContent(children)
    setFooter(option?.footer || '')
    setTitle(option?.title || '')
    setOpenState(true)
  }

  const handleClose = () => {
    setContent('')
    setFooter('')
    setTitle('')
    setOpenState(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen: openState, content, open: handleOpen, close: handleClose, footer, title }}>
      {children}
    </ModalContext.Provider>
  )
}
