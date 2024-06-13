import { useEffect, useState } from "react"

import { getTopics, deleteTopic } from "../services/topicService"
import { Topic } from "../types/Topics"

export default function TopicList() {
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
            {Array.isArray(topics) && topics.map((t: Topic) => (
                <div key={t.id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                    <div>
                        <h2 className='font-bold text-2xl'>{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className='flex gap-2'>
                        <button className='text-red-400' onClick={() => handleDelete(t.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    )
}