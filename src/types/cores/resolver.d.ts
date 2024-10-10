import { RuleObject } from 'antd/es/form'

declare global {
  export interface IFormResolver {
    [x: string]: RuleObject[]
  }
}
