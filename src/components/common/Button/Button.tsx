import { FC, memo } from "react";

interface ButtonTypes {
  text: string;
  bg?: string;
  color?: string;
  onClick: () => void;
}

const ButtonComponent: FC<ButtonTypes> = ({
  bg = "white",
  color = "black",
  text,
  onClick,
}) => {
  return (
    <button
      className={`button-component px-8 py-4 capitalize bg-${bg} text-${color}`}
      type={"button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const Button = memo(ButtonComponent);
