import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import FrontPage from "./pages/FrontPage";
import QuizPage from "./pages/QuizPage";
import Wizard from "./components/Wizard";

export type QuizResponse = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

function App() {
  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5")
  //     .then((res) => res.json())
  //     .then((data) => setAllQuizData(data.results));
  // }, []);

  return <Wizard />;
}

export default App;
