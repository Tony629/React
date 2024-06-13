import './App.css'
import Navbar from './components/Navbar'
import TopicList from './components/TopicList'

function App() {

  return (
    <>
      <div className='mx-auto w-6/12'>
        <Navbar />
        <TopicList />
      </div>
    </>
  )
}

export default App
