import clsx from "clsx";
import { FC, memo } from "react";

interface PageTitleTypes {
  text: string;
  className?: string;
}

const PageTitleComponent: FC<PageTitleTypes> = ({ text, className }) => {
  return (
    <span
      className={clsx("md:text-[5.5rem] text-[40px] leading-none", className)}
    >
      {text}
    </span>
  );
};

export const PageTitle = memo(PageTitleComponent);
