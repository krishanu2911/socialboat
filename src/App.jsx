import './App.css'
import { FiltersBar, Header, VideoSection } from './components'

function App() {

  return (
    <div className='flex flex-col gap-6 w-full min-h-screen'>
      <Header />
      <FiltersBar />
      <VideoSection />
    </div>
  )
}

export default App
