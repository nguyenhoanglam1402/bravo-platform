import { ArrowUpOutlined, MenuOutlined, RightOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Modal } from 'antd'
import { NotebookText, Settings, Split } from 'lucide-react'
import { useContext, useMemo, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { MENU_TOP_LIST } from './constants/menu-list'

import logo from '../../../public/logo/contentful.svg'
import { mergeClasses } from '../../utils/styles/class'
import { ModalContext } from '../../contexts/modal.context'

export default function MainTemplate() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [selectedItem, setSeletectedItem] = useState<string>(pathname)
  const { isOpen, content, close, footer, title } = useContext(ModalContext)

  const renderMenuItem = useMemo(
    () =>
      MENU_TOP_LIST.map((item) => (
        <button
          key={item.value}
          className='flex gap-2 items-center px-2 h-full'
          onClick={() => {
            setSeletectedItem(item.value)
            navigate(`.${item.value}`)
          }}
        >
          {
            <item.icon
              className={mergeClasses('size-4', selectedItem === item.value ? 'text-white' : 'text-[#cfd9e0cc]')}
            />
          }
          <p
            className={mergeClasses(
              'font-nunito text-sm',
              selectedItem === item.value ? 'text-white' : 'text-[#cfd9e0cc]'
            )}
          >
            {item.label}
          </p>
        </button>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedItem]
  )

  return (
    <div className='flex flex-col w-screen h-screen'>
      <nav className='bg-[#0c141c] flex flex-col h-fit'>
        <div className='flex justify-between px-3'>
          <div className='h-[42px] flex gap-3 items-center px-2'>
            <img src={logo} className='size-4' />
            <button className='h-full flex items-center justify-center'>
              <MenuOutlined className='text-white size-4' />
            </button>
            <div className='h-full flex items-center'>
              <Avatar className='bg-[#f7f9fa1a]'>U</Avatar>
              <p className='text-white font-nunito text-xs px-2'>Blank Project</p>
            </div>
          </div>
          <div className='flex items-center px-3 gap-6'>
            <Link to={'#'} className='flex items-center justify-start gap-3'>
              <ArrowUpOutlined className='text-white' />
              <p className='font-nunito text-white text-sm underline'>Level up your free plan</p>
            </Link>
            <div className='flex gap-1 items-center'>
              <p className='text-white text-sm font-nunito leading-tight'>Blank Project</p>
              <RightOutlined className='text-white size-3' />
              <p className='text-[#03a236] text-sm'>master</p>
              <Split className='size-4 text-[#03a236]' />
            </div>

            <button>
              <Settings className='text-white size-4' />
            </button>

            <Badge dot>
              <Avatar className='bg-[#f7f9fa1a] border-2 border-white cursor-pointer' icon={<UserOutlined />}></Avatar>
            </Badge>
          </div>
        </div>
        <div className='flex justify-between h-[40px] bg-[#161b22] border-t-[1px] border-[#21262d] px-3'>
          <div className='flex gap-3'>{renderMenuItem}</div>
          <div>
            <button className='flex gap-2 items-center px-2 h-full'>
              <NotebookText className='text-[#cfd9e0cc] size-4' />
              <p className={mergeClasses('font-nunito text-sm', 'text-[#cfd9e0cc]')}>Docs</p>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
      <Modal open={isOpen} centered onCancel={close} footer={footer} title={title} className='!min-w-[500px] !w-fit'>
        {content}
      </Modal>
    </div>
  )
}
