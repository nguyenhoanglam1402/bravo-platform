import { Button } from 'antd'
import resource from '../../../../public/image/class-illus.jpg'
import { useContext } from 'react'
import { ModalContext } from '../../../contexts/modal.context'
import CreateClassModal from './modal/create.modal'

export default function CreateClassPanel() {
  const { open } = useContext(ModalContext)
  return (
    <div className='flex justify-center items-center h-full gap-6'>
      <div className='flex flex-col gap-6 max-w-[500px] h-fit'>
        <p className='font-semibold font-nunito text-xl'>First, create a class to assign the lesson</p>
        <p className='font-nunito'>
          Each class will have distinct tests and lessons for various students. Therefore, a class must be created
          before proceeding to create any associated tests or lessons.
        </p>
        <Button
          type='primary'
          className='!bg-success-standard max-w-[200px]'
          onClick={() => open(<CreateClassModal />)}
        >
          Create a class
        </Button>
      </div>

      <img src={resource} className='w-[500px] h-[500px]' />
    </div>
  )
}
