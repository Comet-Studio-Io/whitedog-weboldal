import { FC, memo } from "react";

interface ButtonTypes {
  text: string;
  bg?: string;
  color?: string;
  onClick: () => void;
}

const ButtonComponent: FC<ButtonTypes> = ({
  bg = "#ffffff",
  color = "#000000",
  text,
  onClick,
}) => {
  return (
    <button
      className={`px-8 py-4 rounded-full capitalize bg-[${bg}] text-[${color}]`}
      type={"button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const Button = memo(ButtonComponent);
