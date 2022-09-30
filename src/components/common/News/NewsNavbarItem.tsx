import clsx from "clsx";
import { memo, FC, MouseEventHandler } from "react";

import { NewsNavbarTypes } from "../../../types/newsNavbarTypes";

interface NewsNavbarItemTypes {
  text: NewsNavbarTypes;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const NewsNavbarItemComponent: FC<NewsNavbarItemTypes> = ({
  active,
  text,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "capitalize hover:text-white transition-all duration-300 cursor-pointer",
        {
          "text-white": active,
          "text-text-gray-light": !active,
        },
      )}
      type="button"
      value={text}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const NewsNavbarItem = memo(NewsNavbarItemComponent);
