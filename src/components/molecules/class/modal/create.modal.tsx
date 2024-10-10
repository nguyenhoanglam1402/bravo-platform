import { Tabs } from 'antd'
import { TAB_CREATE_FORM } from '../../../../constants/class/ui.const'

export default function CreateClassModal() {
  return (
    <div className='min-w-[500px] max-w-[500px] w-full'>
      <Tabs defaultActiveKey='1' items={TAB_CREATE_FORM} />
    </div>
  )
}
