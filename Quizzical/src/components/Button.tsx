import "./Button.css";

type Props = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?:
    | "primary"
    | "selected"
    | "unselected"
    | "correct"
    | "selected-incorrect"
    | "unselected-incorrect";
};

export default function Button({ children, onClick, type = "primary" }: Props) {
  return (
    <button className={`button button-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
