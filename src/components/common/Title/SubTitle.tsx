import clsx from "clsx";
import { FC, memo } from "react";

interface SubTitleTypes {
  text: string;
  className?: string;
}

const SubTitleComponent: FC<SubTitleTypes> = ({ text, className }) => {
  return (
    <span className={clsx("md:text-[24px] text-[18px] uppercase", className)}>
      {text}
    </span>
  );
};

export const SubTitle = memo(SubTitleComponent);
