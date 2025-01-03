import { Topic } from "../types/Topics"

interface TopicListProps {
    topics: Topic[],
    onDeleteTopic: (id: number) => void;
}

export default function TopicList({ topics, onDeleteTopic }: TopicListProps) {

    return (
        <>
            {Array.isArray(topics) && topics.map((t: Topic) => (
                <div key={t.id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                    <div>
                        <h2 className='font-bold text-2xl'>{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className='flex gap-2'>
                        <button className='text-red-400' onClick={() => onDeleteTopic(t.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    )
}