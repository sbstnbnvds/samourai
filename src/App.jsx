import './App.css'

import Donate from './components/Donate'
import Merch from './components/Merch'
import News from './components/News'
import Resources from './components/Resources'

function App() {
  return (
    <div className='px-4 sm:px-16'>
      <Donate />
      <News />
      <Merch />
      <Resources />
    </ div>
  )
}

export default App
