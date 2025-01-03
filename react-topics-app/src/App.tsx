import { useEffect, useState } from 'react'

import './App.css'
import { Topic } from "./types/Topics"
import { getTopics, deleteTopic } from './services/topicService'
import Navbar from './components/Navbar'
import TopicList from './components/TopicList'

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const fetchedTopics = await getTopics();
      setTopics(fetchedTopics);
    }

    fetchTopics();
  }, [])

  const handleDelete = async (id: number) => {
    try {
      await deleteTopic(id);
      setTopics(topics.filter(x => x.id !== id))
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='mx-auto w-6/12'>
        <Navbar />
        <TopicList topics={topics} onDeleteTopic={handleDelete} />
      </div>
    </>
  )
}

export default App
