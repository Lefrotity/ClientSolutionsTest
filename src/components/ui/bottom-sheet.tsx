import { X } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

type BottomSheetProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function BottomSheet({ isOpen, onClose, title, children }: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-end justify-center bg-black/50' onClick={handleOverlayClick}>
      <div ref={sheetRef} className='w-full max-w-md animate-slide-up rounded-t-2xl bg-white p-4 shadow-xl'>
        <div className='mb-4 flex  justify-between border-b border-gray-200 pb-3'>
          <h3 className='text-lg font-semibold '>{title}</h3>
          <button onClick={onClose} aria-label='Закрыть'>
            <X />
          </button>
        </div>

        <div className='flex flex-col gap-1'>{children}</div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
