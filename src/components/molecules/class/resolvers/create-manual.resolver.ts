import { E_Type, getValidateMessage } from '../../../../utils/core/validation'

export const createClassManualRule: IFormResolver = {
  name: [
    {
      max: 10,
      message: getValidateMessage('Name', E_Type.LEN, { maxLength: 10 })
    },
    {
      required: true,
      message: getValidateMessage('Name', E_Type.REQ)
    }
  ],
  description: [
    {
      max: 255,
      message: getValidateMessage('Description', E_Type.LEN, { maxLength: 255 })
    }
  ],
  enrrolment_key: [
    {
      max: 100,
      message: getValidateMessage('Enrrolment Key', E_Type.LEN, { maxLength: 255 })
    }
  ]
}
