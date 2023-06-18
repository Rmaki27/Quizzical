import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import FrontPage from './FrontPage'
import Quiz from './Quiz'

function App() {
const [frontPage, setFrontPage] = useState(true)
const [allQuizData, setAllQuizData] = useState({})

function quizContent(): void | undefined {
  if (frontPage !== true) {
    return
  }
  else {
    return setFrontPage(false)
  }
}

useEffect(() => {
  fetch('https://opentdb.com/api.php?amount=5')
  .then(res => res.json())
  .then(data => setAllQuizData(data))
}, [])


  return (
    <>
      <div>
        {frontPage && <FrontPage quizContent={quizContent}/>}
        {frontPage !== true && <Quiz quizData={allQuizData}/>}
      </div>
    </>
  )
}

export default App
