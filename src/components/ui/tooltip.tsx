import { useCallback, useEffect, useRef, useState } from 'react'

type MenuTooltipProps = {
  children: React.ReactElement
  content: React.ReactNode
}

export function MenuTooltip({ children, content }: MenuTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const triggerHovered = useRef(false)
  const tooltipHovered = useRef(false)

  const updateVisibility = useCallback(() => {
    setIsVisible(triggerHovered.current || tooltipHovered.current)
  }, [])

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({
        top: rect.top,
        left: rect.right + 8,
      })
    }
  }, [isVisible])

  const handleTriggerEnter = () => {
    triggerHovered.current = true
    updateVisibility()
  }

  const handleTriggerLeave = () => {
    triggerHovered.current = false
    setTimeout(updateVisibility, 100)
  }

  const handleTooltipEnter = () => {
    tooltipHovered.current = true
    updateVisibility()
  }

  const handleTooltipLeave = () => {
    tooltipHovered.current = false
    setTimeout(updateVisibility, 100)
  }

  return (
    <>
      <div ref={triggerRef} onMouseEnter={handleTriggerEnter} onMouseLeave={handleTriggerLeave}>
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          style={{ top: position.top, left: position.left }}
          onMouseEnter={handleTooltipEnter}
          onMouseLeave={handleTooltipLeave}
          className='fixed z-50 bg-white border border-gray-200 shadow-xl rounded-lg py-1.5 min-w45 select-none'
        >
          {content}
        </div>
      )}
    </>
  )
}
