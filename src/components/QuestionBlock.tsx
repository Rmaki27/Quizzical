import Button from "./Button";

type Props = {
  question: string;
  questionIndex: number;
  options: string[];
  selectedAnswer?: string;
  onAnswerSelect: (option: string, questionIndex: number) => void;
  isFormComplete: boolean;
  correctAnswer: string;
};

export default function QuestionBlock({
  options,
  question,
  selectedAnswer,
  onAnswerSelect,
  questionIndex,
  isFormComplete,
  correctAnswer,
}: Props) {
  function setType(answer: string | undefined, option: string) {
    if (isFormComplete) {
      if (option === correctAnswer) {
        return "correct";
      } else if (option === answer && answer !== correctAnswer) {
        return "selected-incorrect";
      } else {
        return "unselected-incorrect";
      }
    } else {
      if (answer === option) {
        return "selected";
      } else {
        return "unselected";
      }
    }
  }

  return (
    <>
      <p>{question}</p>
      <div>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => {
              if (isFormComplete === false) {
                onAnswerSelect(option, questionIndex);
              }
            }}
            type={setType(selectedAnswer, option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  );
}
