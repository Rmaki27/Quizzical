import { QuizResponse } from "../App";
import { useState } from "react";
import Button from "../components/Button";
import QuestionBlock from "../components/QuestionBlock";

type Props = {
  onNextPage: () => void;
};

export default function QuizPage({ onNextPage }: Props) {
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
