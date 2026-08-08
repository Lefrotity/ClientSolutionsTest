import MainNav from '../features/main-nav'

type MainLayoutProps = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex md:flex-row flex-col-reverse'>
      <div>
        <MainNav />
      </div>
      <div className='m-auto mt-6'>{children}</div>
    </div>
  )
}

export default MainLayout
