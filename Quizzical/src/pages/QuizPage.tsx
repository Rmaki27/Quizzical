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
  options: Array<string>;
};

export default function QuizPage({ onNextPage }: Props) {
  const [allQuizData, setAllQuizData] = useState<QuizResponse[]>();
  console.log(allQuizData);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data: Record<string, unknown> & { results: QuizResponse[] }) =>
        setAllQuizData(() => {
          console.log(data.results);
          const newData = data.results.map((question: QuizResponse) => {
            const index = Math.floor(Math.random() * 3 + 1);
            const options = [...question.incorrect_answers];
            options.splice(index, 0, question.correct_answer);
            const result: QuizResponse = {
              ...question,
              options: options,
            };
            return result;
          });
          console.log("New data: ", newData);
          return newData;
        })
      );
  }, []);

  return (
    <>
      {allQuizData &&
        allQuizData.map((currentQuestion) => {
          return (
            <QuestionBlock
              question={decode(currentQuestion.question)}
              options={currentQuestion.options}
            />
          );
        })}
      <Button onClick={onNextPage}>Check Answers</Button>
    </>
  );
}
