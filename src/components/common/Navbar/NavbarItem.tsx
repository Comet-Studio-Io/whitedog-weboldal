import clsx from "clsx";
import { memo, FC, MouseEventHandler } from "react";

interface NavbarItemTypes {
  text: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const NavbarItemComponent: FC<NavbarItemTypes> = ({
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

export const NavbarItem = memo(NavbarItemComponent);
