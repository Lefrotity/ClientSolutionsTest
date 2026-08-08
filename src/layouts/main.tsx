import MainNav from '../features/main-nav'
import MobileNav from '../features/mobile-nav'
import { useDevice } from '../hooks/useDevice'

type MainLayoutProps = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const { isMobile } = useDevice()

  return (
    // md:flex-row flex-col-reverse in order not to rerender children
    <div className='flex h-screen md:flex-row flex-col-reverse'>
      <div>{isMobile ? <MobileNav /> : <MainNav />}</div>
      <div className='m-auto mt-6'>{children}</div>
    </div>
  )
}

export default MainLayout
