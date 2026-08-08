import { useLocation, useNavigate } from 'react-router'
import {
  ChartArea,
  Check,
  Tickets,
  WalletCards,
  Smile,
  Dot,
  Store,
  FileText,
  Gavel,
  Settings,
  BookOpen,
  Package,
} from 'lucide-react'
import { SideMenuItem, SideMenu, SideMenuCollapseButton } from '../components/side-menu'
import { ROUTES } from '../routes/routes'
import { useCallback, useState } from 'react'

function MainNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)
  const toggle = useCallback(() => setCollapsed((c) => !c), [])

  const onItemClick = useCallback(
    (id: string) => {
      navigate(id)
    },
    [navigate],
  )

  const getIsActive = (id: string) => location.pathname.startsWith(id)

  // I desperately wanted to use JS-object and map cycle but it's permitted :(
  return (
    <SideMenu title='HelloClient' collapsed={collapsed}>
      <SideMenuItem
        id={ROUTES.TRENDS}
        label='Trends'
        icon={<ChartArea />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TRENDS)}
      />
      <SideMenuItem
        id={ROUTES.TASKS}
        label='Tasks'
        icon={<Check />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TASKS)}
      />
      <SideMenuItem
        id={ROUTES.TICKETS}
        label='Tickets'
        icon={<Tickets />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TICKETS)}
      />
      <SideMenuItem
        id={ROUTES.PAYMENTS}
        label='Payments'
        icon={<WalletCards />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.PAYMENTS)}
      />
      <SideMenuItem
        id={ROUTES.CLIENTS.LIST}
        label='Clients'
        icon={<Smile />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.CLIENTS.CLIENTS)}
      >
        <SideMenuItem
          id={ROUTES.CLIENTS.LIST}
          label='List'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.CLIENTS.LIST)}
        />
        <SideMenuItem
          id={ROUTES.CLIENTS.REVIEWS}
          label='Reviews'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.CLIENTS.REVIEWS)}
        />
        <SideMenuItem
          id={ROUTES.CLIENTS.NOTIFICATIONS}
          label='Notifications'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.CLIENTS.NOTIFICATIONS)}
        />
      </SideMenuItem>
      <SideMenuItem
        id={ROUTES.INVENTORY.PRODUCTS}
        label='Inventory'
        icon={<Package />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.INVENTORY.INVENTORY)}
      >
        <SideMenuItem
          id={ROUTES.INVENTORY.PRODUCTS}
          label='Products'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.INVENTORY.PRODUCTS)}
        />
        <SideMenuItem
          id={ROUTES.INVENTORY.ORDERS}
          label='Orders'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.INVENTORY.ORDERS)}
        />
        <SideMenuItem
          id={ROUTES.INVENTORY.SUPPLIES}
          label='Supplies'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.INVENTORY.SUPPLIES)}
        />
      </SideMenuItem>
      <SideMenuItem
        id={ROUTES.SHOP}
        label='Shop'
        icon={<Store />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.SHOP)}
      />
      <SideMenuItem
        id={ROUTES.REPORTS}
        label='Reports'
        icon={<FileText />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.REPORTS)}
      />
      <SideMenuItem
        id={ROUTES.TENDER}
        label='Tender'
        icon={<Gavel />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TENDER)}
      />
      {/* Also it'll be good to have smt like <SideMenuSeparator /> */}
      <hr />
      <SideMenuItem
        id={ROUTES.SETTINGS}
        label='Settings'
        icon={<Settings />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.SETTINGS)}
      />
      <SideMenuItem
        id={ROUTES.KNOWLEDGE_BASE}
        label='Knowledge Base'
        icon={<BookOpen />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.KNOWLEDGE_BASE)}
      />
      <hr />
      <div className='flex items-center ml-2 mt-4'>
        <SideMenuCollapseButton toggle={toggle} collapsed={collapsed} />
      </div>
    </SideMenu>
  )
}

export default MainNav
