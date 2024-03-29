'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { useSidebarStore } from '@/stores/sidebar-store'

const Topbar = () => {
  const { handleToggle, isOpen } = useSidebarStore()
  console.log({ isOpen })
  return (
    <div
      className={cn(
        'flex items-center p-4 justify-between sticky top-0',
        'lg:hidden',
      )}
    >
      <Logo />
      <Button variant="ghost" size="icon" onClick={handleToggle}>
        <Menu />
      </Button>
    </div>
  )
}

export default Topbar
