type Props = {
  onNextPage: () => void;
};

export default function FrontPage({ onNextPage }: Props) {
  return (
    <>
      <h1>Quizzical</h1>
      <p>Ready to test your knowledge?</p>
      <button onClick={onNextPage}>Start Quiz</button>
    </>
  );
}
