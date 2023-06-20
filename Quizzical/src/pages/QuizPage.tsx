import { QuizResponse } from "../App";

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
      <div>
        <h1>content</h1>
        {/* {questions} */}
      </div>
      <button onClick={onNextPage}>Check Answers</button>
    </>
  );
}
