import clsx from "clsx";
import { FC, memo } from "react";

interface DescriptionTypes {
  text: string;
  className?: string;
}

const DescriptionComponent: FC<DescriptionTypes> = ({ text, className }) => {
  return (
    <div className="flex">
      <span
        className={clsx(`py-6 lg:text-[1.75rem] text-[1.375rem]`, className)}
      >
        {text}
      </span>
    </div>
  );
};

export const Description = memo(DescriptionComponent);
