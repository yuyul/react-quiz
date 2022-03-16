import { useState, useEffect } from 'react'
import data from './questions.json'
import './play.css'

export default function Play() {
    const [question, setQuestion] = useState({})

    useEffect(() => {
        const questionNumber = Math.floor(Math.random() * data.questions.length);
        setQuestion(data.questions[questionNumber])
    }, [])

    return(
        <div>
            <h1>Play</h1>
            <img src={question.image} />
            <h2>{question.description}</h2>
            <ol className='answers'>
                {question.alternatives && question.alternatives.map((a) => (
                    <li key={a}>
                        <button>{a}</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}