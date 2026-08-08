import { PanelLeftClose, PanelRightClose } from 'lucide-react'
import React from 'react'
import { MenuTooltip } from './tooltip'

// About custom styles
// I haven't done custom styles because it's our onw component
// and if we need to change styles we go right in this file and change it
// it's not a library
// but if this is important you can pass customization param in components props like
// <SideMenu customization={ {base: "w100 lalala...", title: "supermegabold lalala"} }  >...
// And since we use tailwind it's important to connect strings via cn()
// cn it's a util function you write based on twMerge()

// It's better to use a state manager you already have in your project
// But context it decent for now
const SideMenuContext = React.createContext<{ collapsed: boolean }>({ collapsed: false })

type SideMenuProps = {
  title: string
  children: React.ReactNode
  collapsed?: boolean
}
export function SideMenu({ title, children, collapsed = false }: SideMenuProps) {
  return (
    <SideMenuContext.Provider value={{ collapsed }}>
      <aside className={`${collapsed ? 'w-[40px]' : 'w-[180px]'} overflow-hidden transition-all duration-300 h-full`}>
        {title && <h3 className='text-2xl text-center'>{collapsed ? title[0] : title}</h3>}
        <nav>{children}</nav>
      </aside>
    </SideMenuContext.Provider>
  )
}

export type SideMenuItemProps = {
  id: string
  label: string
  icon: React.ReactNode
  onClick: (id: string) => void
  active?: boolean
  children?: React.ReactNode
}
export function SideMenuItem({ id, label, icon, children, onClick, active }: SideMenuItemProps) {
  const hasChildren = React.Children.count(children) > 0
  const { collapsed } = React.useContext(SideMenuContext)

  const handleClick = () => {
    if (onClick) onClick(id)
  }

  const itemTrigger = (
    <div
      onClick={handleClick}
      className={`flex items-center cursor-pointer hover:bg-gray-200 rounded px-1 py-1.5 ${active ? 'bg-gray-300' : ''}`}
    >
      {icon && <span className='mx-1'>{icon}</span>}
      {!collapsed && <span className='text-nowrap'>{label}</span>}
    </div>
  )

  if (collapsed) {
    const tooltipContent = hasChildren ? (
      <div>
        <div className='font-semibold  border-b border-gray-200 px-3 py-2'>{label}</div>

        <div className='py-1'>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement<SideMenuItemProps>(child)) {
              return null
            }

            return (
              <div
                key={child.props.id}
                onClick={() => child.props.onClick(child.props.id)}
                className={`px-3 py-1.5 text-sm  hover:bg-gray-100  cursor-pointer transition-colors ${child.props.active ? 'bg-gray-300' : ''}`}
              >
                {child.props.label}
              </div>
            )
          })}
        </div>
      </div>
    ) : (
      <div
        onClick={handleClick}
        className={`px-3 py-2 text-sm  hover:bg-gray-100 cursor-pointer transition-colors ${active ? 'bg-gray-300' : ''}`}
      >
        {label}
      </div>
    )

    return (
      <div className='my-1'>
        <MenuTooltip content={tooltipContent}>{itemTrigger}</MenuTooltip>
      </div>
    )
  }

  return (
    <div className='my-1'>
      {itemTrigger}
      {hasChildren && active && <div className='pl-8 mt-1 space-y-1'>{children}</div>}
    </div>
  )
}

type SideMenuCollapseButtonProps = {
  collapsed: boolean
  toggle: () => void
}
// That's why it's better to use your own state manager
// I can use Collapse Button only inside SideMenu but sometimes you need it outside
// Anyway the current implementation is pretty decent
export function SideMenuCollapseButton({ toggle }: SideMenuCollapseButtonProps) {
  const { collapsed } = React.useContext(SideMenuContext)
  // Btw it's good to have my own button from /components/ui or some lib
  // but for test task it's ok
  return (
    <button onClick={toggle} className='cursor-pointer'>
      {collapsed ? <PanelRightClose /> : <PanelLeftClose />}
    </button>
  )
}
