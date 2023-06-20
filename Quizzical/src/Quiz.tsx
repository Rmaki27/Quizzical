import { QuizResponse } from "./App"


type Props = {
    quizData: QuizResponse[]
}

export default function Quiz(props: Props) {
    const {quizData} = props
    console.log("quiz data: ", props.quizData)

   const questions = quizData.map((currentItem)=> {
            return (
                <div>
                    <h2>{currentItem.question}</h2>
                    <p>{currentItem.incorrect_answers}</p>
                </div>
            )
        })

console.log("questions: ",questions)

    return (
        <>
            <div>
                <h1>content</h1>
                {questions}
            </div>
            <button>Check Answers</button>
        </>
    )
}