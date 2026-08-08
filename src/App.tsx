import { useLocation } from 'react-router'

function App() {
  const location = useLocation()

  return (
    <>
      <h1 className='text-xl font-bold underline'>Page: {location.pathname}</h1>
    </>
  )
}

export default App

// The biggest question you may have!!!
// Why am I using single quotes and don't use ';'
// It's simple - because code will work without it
// If it works the same way without extra symbols so why use it then???
