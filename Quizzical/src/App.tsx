import { useState } from 'react'
import './App.css'
import FrontPage from './FrontPage'
import Quiz from './Quiz'

function App() {
const [frontPage, setFrontPage] = useState(true)

function quizContent(): boolean | undefined {
  if (frontPage !== true) {
    return
  }
  else {
    setFrontPage(false)
  }
}


  return (
    <>
      <div>
        {frontPage && <FrontPage quizContent={quizContent}/>}
        {frontPage !== true && <Quiz />}
      </div>
    </>
  )
}

export default App
