import { TabsProps } from 'antd'
import CreateClassManual from '../../components/molecules/class/modal/create-manual'

export const TAB_CREATE_FORM: TabsProps['items'] = [
  {
    key: '1',
    label: 'Create a new class',
    children: <CreateClassManual />
  },
  {
    key: '2',
    label: 'Generate a new class with AI',
    children: 'Content of Tab Pane 2'
  }
]
