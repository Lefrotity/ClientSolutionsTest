import React, { useState, useCallback } from 'react'
import { BottomSheet } from './ui/bottom-sheet'
import type { SideMenuItemProps } from './side-menu'

type MobileMenuProps = {
  children: React.ReactNode
}

export function MobileMenu({ children }: MobileMenuProps) {
  return <section className='flex'>{children}</section>
}

export function MobileMenuItem({ id, label, icon, children, onClick, active }: SideMenuItemProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const hasChildren = Boolean(children)

  const handleClick = () => {
    if (hasChildren) {
      setIsSheetOpen(true)
    } else if (onClick) {
      onClick(id)
    }
  }

  const handleChildClick = useCallback(
    (childId: string) => {
      if (onClick) onClick(childId)
      setIsSheetOpen(false)
    },
    [onClick],
  )

  return (
    <>
      <div className='flex-1 min-w-0'>
        <div
          onClick={handleClick}
          className={`flex cursor-pointer items-center justify-center rounded px-2 py-2 hover:bg-gray-200 ${
            active ? 'bg-gray-300' : ''
          }`}
        >
          {icon && <span className='mx-1'>{icon}</span>}
        </div>
      </div>

      {hasChildren && (
        <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} title={label}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement<SideMenuItemProps>(child)) return null

            return (
              <div
                key={child.props.id}
                onClick={() => handleChildClick(child.props.id)}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-200 ${
                  child.props.active ? 'bg-gray-300' : ''
                }`}
              >
                {child.props.icon && <span>{child.props.icon}</span>}
                <span>{child.props.label}</span>
              </div>
            )
          })}
        </BottomSheet>
      )}
    </>
  )
}
