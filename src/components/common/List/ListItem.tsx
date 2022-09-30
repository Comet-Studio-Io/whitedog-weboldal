import { Collapse } from "@chakra-ui/react";
import clsx from "clsx";
import { FC, memo, MouseEventHandler } from "react";

interface ListItemTypes {
  title: string;
  data: string;
  active: boolean;
  dark?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ListItemComponent: FC<ListItemTypes> = ({
  title,
  data,
  active,
  dark = true,
  onClick,
}) => {
  return (
    <button
      className={clsx("md:text-[1.75rem] text-[1.375rem] w-full text-left", {
        "text-black": active && dark,
        "text-white": active && !dark,
        "text-text-gray-light": !active,
      })}
      type="button"
      value={title}
      onClick={onClick}
    >
      {active ? "" : title}
      <Collapse animateOpacity in={active}>
        {title + data}
      </Collapse>
      <hr
        className={clsx("h-1 w-full border-t-2 border-solid my-4", {
          "border-black": active,
          "border-text-gray-light": !active,
        })}
      />
    </button>
  );
};

export const ListItem = memo(ListItemComponent);
