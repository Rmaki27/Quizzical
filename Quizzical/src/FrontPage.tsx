export default function FrontPage(props) {
    return (
        <>
            <h1>Quizzical</h1>
            <p>Ready to test your knowledge?</p>
            <button onClick={props.quizContent}>Start Quiz</button>
        </>
    )
}