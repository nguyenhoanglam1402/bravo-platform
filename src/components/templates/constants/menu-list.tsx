import { BookA, Home, Shapes, ToyBrick } from 'lucide-react'
import { TMenuItem } from '../type'

export const MENU_TOP_LIST: TMenuItem[] = [
  {
    label: 'Home',
    value: '/home',
    icon: Home
  },
  {
    label: 'Class',
    value: '/class',
    icon: BookA
  },
  {
    label: 'Content',
    value: '/content',
    icon: Shapes
  },
  {
    label: 'Plugin',
    value: '/plugin',
    icon: ToyBrick
  }
]
