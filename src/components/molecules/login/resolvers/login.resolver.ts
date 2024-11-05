import { E_Type, getValidateMessage } from '../../../../utils/core/validation'

export const loginFormResolver: IFormResolver = {
  username: [
    {
      required: true,
      message: getValidateMessage('Username', E_Type.REQ)
    }
  ],
  password: [
    {
      required: true,
      message: getValidateMessage('Password', E_Type.REQ)
    }
  ]
}
