import Button from "./Button";

type Props = {
  question: string;
  questionIndex: number;
  options: string[];
  selectedAnswer: string;
  onAnswerSelect: (option: string) => void;
};

export default function QuestionBlock({
  options,
  question,
  selectedAnswer,
  onAnswerSelect,
  questionIndex,
}: Props) {
  return (
    <>
      <p>{question}</p>
      <div>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswerSelect(option, questionIndex)}
            type={selectedAnswer === option ? "selected" : "unselected"}
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  );
}
