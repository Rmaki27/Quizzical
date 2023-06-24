import { useState } from "react";
import Button from "./Button";

type Props = {
  question: string;
  options: string[];
};

export default function QuestionBlock({ options, question }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  console.log("selected Answer index = ", selectedAnswer);

  return (
    <>
      <p>{question}</p>
      <div>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => setSelectedAnswer(option)}
            type={selectedAnswer === option ? "selected" : "unselected"}
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  );
}
