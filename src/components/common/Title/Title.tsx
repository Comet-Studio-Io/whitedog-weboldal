import clsx from "clsx";
import { FC, memo } from "react";

interface TitleTypes {
  text: string;
  className?: string;
}

const TitleComponent: FC<TitleTypes> = ({ text, className }) => {
  return (
    <div className="w-full text-left pt-20 pb-8">
      <span className={clsx(`uppercase`, className)}>{text}</span>
    </div>
  );
};

export const Title = memo(TitleComponent);
