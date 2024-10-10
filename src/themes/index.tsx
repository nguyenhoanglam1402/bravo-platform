import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'
import lightTheme from './light.theme'

export default function CoreThemeProvider({ children }: { children: ReactNode }) {
  return <ConfigProvider theme={lightTheme}>{children}</ConfigProvider>
}
