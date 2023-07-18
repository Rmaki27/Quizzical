import { useState } from "react";
import FrontPage from "../pages/FrontPage";
import QuizPage from "../pages/QuizPage";

export default function Wizard() {
  const [step, setStep] = useState(0);

  function onNextPage() {
    if (step === 1) {
      return setStep(0);
    }

    setStep(step + 1);
  }

  return (
    <div>
      {step === 0 && <FrontPage onNextPage={onNextPage} />}
      {step === 1 && <QuizPage onNextPage={onNextPage} />}
    </div>
  );
}
