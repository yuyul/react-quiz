import { useState, useEffect } from 'react'
import data from './questions.json'
import './play.css'

export default function Play() {
    const [questions, setQuestions] = useState([])
    const [questionNumber, setQuestionNumber] = useState(0)
    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState({})

    useEffect(() => {
        const shuffledQuestions = data.questions.sort((a, b) => 0.5 - Math.random());
        setQuestions(shuffledQuestions)
        setQuestion(shuffledQuestions[0])
        console.log("Load")
    }, [])

    useEffect(() => {
        console.log("update question")
        if (questions.length > 0) {
            setQuestion(questions[questionNumber])
        }
    }, [questionNumber])



    return(
        <div>
            <h1>Play</h1>
            <h2>Question {questionNumber}</h2>{}
            <img src={question.image} />
            <h2>{question.description}</h2>
            <ol className='answers'>
                {question.alternatives && question.alternatives.map((a) => (
                    <li key={a}>
                        <button>{a}</button>
                    </li>
                ))}
            </ol>
            {questionNumber > 0 && (<button onClick={() => setQuestionNumber(questionNumber-1)}>Previous</button>)}
            {questionNumber < questions.length - 1 && (<button onClick={() => setQuestionNumber(questionNumber+1)}>Next</button>)}
        </div>
    )
}