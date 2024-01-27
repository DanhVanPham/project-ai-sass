import Topbar from '@/components/Topbar'
import React, { PropsWithChildren } from 'react'

type DashboardLayoutProps = PropsWithChildren

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      {children}
    </div>
  )
}

export default DashboardLayout
