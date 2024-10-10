import { Form } from 'antd'
import { TClass } from '../../../../types/class.type'
import { useContext } from 'react'
import { ModalContext } from '../../../../contexts/modal.context'

export const useCreateManual = () => {
  const [form] = Form.useForm<TClass>()
  const { close } = useContext(ModalContext)

  const handleSubmitForm = (value: TClass) => {
    console.log('🚀 ~ handleSubmitForm ~ value:', value)
  }

  const handleClose = () => {
    form.resetFields()
    close()
  }

  return [{ form }, { handleSubmitForm, handleClose }] as const
}
