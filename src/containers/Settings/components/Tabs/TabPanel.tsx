import { FC } from 'react'

export interface TabPanelProps {
  index: string
  title: string
  children: React.ReactNode
}

// @ts-ignore
export const TabPanel: FC<TabPanelProps> = props => {
  return props.children
}
