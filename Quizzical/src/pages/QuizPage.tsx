import { QuizResponse } from "../App";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import QuestionBlock from "../components/QuestionBlock";
import { decode } from "html-entities";

type Props = {
  onNextPage: () => void;
};

type QuizResponse = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

export default function QuizPage({ onNextPage }: Props) {
  const [allQuizData, setAllQuizData] = useState<QuizResponse[]>();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setAllQuizData(data.results));
  }, []);

  return (
    <>
      {allQuizData &&
        allQuizData.map((currentQuestion) => {
          return (
            <QuestionBlock
              question={decode(currentQuestion.question)}
              options={currentQuestion.incorrect_answers}
            />
          );
        })}
      <Button onClick={onNextPage}>Check Answers</Button>
    </>
  );
}
