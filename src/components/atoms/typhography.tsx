import { ReactNode } from 'react'

interface IProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children: ReactNode
}

export default function Typhography(props: IProps) {
  return <p className='text-sm font-nunito'> {props.children}</p>
}
