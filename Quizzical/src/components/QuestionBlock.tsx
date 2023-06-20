import Button from "./Button";

type Props = {
  question: string;
  options: string[];
};

export default function QuestionBlock({ options, question }: Props) {
  return (
    <>
      <p>{question}</p>
      <div>
        {options.map((option) => (
          <Button type="selected">{option}</Button>
        ))}
      </div>
    </>
  );
}
