import { create } from 'zustand'

export interface SidebarState {
  isOpen: boolean
  handleToggle: () => void
  handleClose: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  handleToggle: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleClose: () => set((state) => ({ ...state, isOpen: false })),
}))
