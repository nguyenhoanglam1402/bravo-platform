import { Button, Form } from 'antd'
import { useCreateManual } from '../hooks/create-manual.hook'
import CInput from '../../../atoms/input'
import TextArea from 'antd/es/input/TextArea'
import { createClassManualRule } from '../resolvers/create-manual.resolver'

export default function CreateClassManual() {
  const [{ form }, { handleSubmitForm, handleClose }] = useCreateManual()
  return (
    <Form form={form} layout='vertical' onFinish={handleSubmitForm}>
      <Form.Item name={'name'} label='Name' rules={createClassManualRule.name} required>
        <CInput placeholder='Enter Name of Class' />
      </Form.Item>
      <Form.Item
        name={'enrrolment_key'}
        label='Enrrolment Key'
        rules={createClassManualRule.enrrolment_key}
        help={
          <p className='text-xs mb-4'>
            Enrrolment Key is the key student need to access to the class. It make the class more security and safer
          </p>
        }
      >
        <CInput placeholder='Enter Enrrolment Key' />
      </Form.Item>
      <Form.Item name={'description'} label='Description' rules={createClassManualRule.description}>
        <TextArea contentEditable placeholder='Enter Description...' />
      </Form.Item>
      <div className='flex gap-3'>
        <Button className='flex-1' onClick={handleClose}>
          Cancel
        </Button>

        <Button className='flex-1' type='primary' htmlType='submit'>
          Create
        </Button>
      </div>
    </Form>
  )
}
