import React, { PropsWithChildren } from 'react'

type LandingLayoutProps = PropsWithChildren

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return <div>{children}</div>
}

export default LandingLayout
