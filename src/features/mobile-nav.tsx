import { useLocation, useNavigate } from 'react-router'
import { MobileMenu, MobileMenuItem } from '../components/mobile-menu'
import { ROUTES } from '../routes/routes'
import { ChartArea, Check, Tickets, WalletCards, Smile, Dot, Store, FileText, Gavel, Package } from 'lucide-react'

// Why do I have a separate component for a mobile representation instead of
// trying to put everything into main-nav and modifying side-menu?
// Because it's usually way more easy to have couple of simple components instead of
// putting everything under one hood and escalating logic
//
// imagine I've put everything in side-menu. I have to add isMobile before collapsed everywhere.
// And it may cause missunderstandings. Why do I have collapse param but on mobile it's not working?
// and so on

export default function MobileNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const onItemClick = (id: string) => {
    navigate(id)
  }

  const getIsActive = (id: string) => location.pathname.startsWith(id)

  return (
    <MobileMenu>
      <MobileMenuItem
        id={ROUTES.TRENDS}
        label='Trends'
        icon={<ChartArea />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TRENDS)}
      />
      <MobileMenuItem
        id={ROUTES.TASKS}
        label='Tasks'
        icon={<Check />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TASKS)}
      />
      <MobileMenuItem
        id={ROUTES.TICKETS}
        label='Tickets'
        icon={<Tickets />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TICKETS)}
      />
      <MobileMenuItem
        id={ROUTES.PAYMENTS}
        label='Payments'
        icon={<WalletCards />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.PAYMENTS)}
      />
      <MobileMenuItem
        id={ROUTES.CLIENTS.LIST}
        label='Clients'
        icon={<Smile />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.CLIENTS.CLIENTS)}
      >
        <MobileMenuItem
          id={ROUTES.CLIENTS.LIST}
          label='List'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.CLIENTS.LIST)}
        />
        <MobileMenuItem
          id={ROUTES.CLIENTS.REVIEWS}
          label='Reviews'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.CLIENTS.REVIEWS)}
        />
        <MobileMenuItem
          id={ROUTES.CLIENTS.NOTIFICATIONS}
          label='Notifications'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.CLIENTS.NOTIFICATIONS)}
        />
      </MobileMenuItem>
      <MobileMenuItem
        id={ROUTES.INVENTORY.PRODUCTS}
        label='Inventory'
        icon={<Package />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.INVENTORY.INVENTORY)}
      >
        <MobileMenuItem
          id={ROUTES.INVENTORY.PRODUCTS}
          label='Products'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.INVENTORY.PRODUCTS)}
        />
        <MobileMenuItem
          id={ROUTES.INVENTORY.ORDERS}
          label='Orders'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.INVENTORY.ORDERS)}
        />
        <MobileMenuItem
          id={ROUTES.INVENTORY.SUPPLIES}
          label='Supplies'
          icon={<Dot />}
          onClick={onItemClick}
          active={getIsActive(ROUTES.INVENTORY.SUPPLIES)}
        />
      </MobileMenuItem>
      <MobileMenuItem
        id={ROUTES.SHOP}
        label='Shop'
        icon={<Store />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.SHOP)}
      />
      <MobileMenuItem
        id={ROUTES.REPORTS}
        label='Reports'
        icon={<FileText />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.REPORTS)}
      />
      <MobileMenuItem
        id={ROUTES.TENDER}
        label='Tender'
        icon={<Gavel />}
        onClick={onItemClick}
        active={getIsActive(ROUTES.TENDER)}
      />
    </MobileMenu>
  )
}
