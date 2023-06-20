import { QuizResponse } from "../App";
import Button from "../components/Button";
import QuestionBlock from "../components/QuestionBlock";

type Props = {
  onNextPage: () => void;
};

export default function QuizPage({ onNextPage }: Props) {
  // const questions = quizData.map((currentItem) => {
  //   return (
  //     <div>
  //       <h2>{currentItem.question}</h2>
  //       <p>{currentItem.incorrect_answers}</p>
  //     </div>
  //   );
  // });

  return (
    <>
      <QuestionBlock
        question="What's the largest bird species in the world?"
        options={["pigeon", "parakeet", "doves"]}
      />
      <Button onClick={onNextPage}>Check Answers</Button>
    </>
  );
}
