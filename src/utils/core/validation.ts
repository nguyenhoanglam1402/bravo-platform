export enum E_Type {
  LEN,
  REQ,
  INVAL
}

type TOption = {
  maxLength?: number
  minLength?: number
  helperText?: string
  helperLink?: {
    text: string
    url: string
  }
}

export function getValidateMessage(fieldName: string, type: E_Type, option?: TOption): string {
  switch (type) {
    case E_Type.REQ:
      return `${fieldName.toString()} is required.`
    case E_Type.INVAL:
      return `${fieldName.toString()} is invalid format.`
    default:
      if (!option) throw Error('INVAL type message cannot be used without option parameter')
      if (option.maxLength) {
        return `${fieldName.toString()} is over max length (${option.maxLength}).`
      }
      if (option.minLength) {
        return `${fieldName.toString()} is less than min length (${option.minLength})`
      }
      return `${fieldName.toString} is have something wrong!`
  }
}
