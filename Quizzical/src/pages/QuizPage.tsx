import { QuizResponse } from "../App";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import QuestionBlock from "../components/QuestionBlock";

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
  const [allQuizData, setAllQuizData] = useState<QuizResponse>();
  console.log("quiz data: ", allQuizData);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setAllQuizData(data.results));
  }, []);

  return (
    <>
      {/* allQuizData.map((questionBlock,index) => {
      return (
      <QuestionBlock
        question= {questionBlock[index]}
        options={["pigeon", "parakeet", "doves"]}
      />)}) */}
      <QuestionBlock
        question="what's the bird?"
        options={["pigeon", "parakeet", "doves"]}
      />
      <Button onClick={onNextPage}>Check Answers</Button>
    </>
  );
}
