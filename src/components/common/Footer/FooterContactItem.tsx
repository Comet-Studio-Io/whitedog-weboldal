import clsx from "clsx";
import { memo, FC } from "react";

interface FooterContactItemTypes {
  title: string;
  data: string;
  underline?: boolean;
}

const FooterContactItemComponent: FC<FooterContactItemTypes> = ({
  title,
  data,
  underline = true,
}) => {
  return (
    <div className="flex flex-col mx-1">
      <span className="text-text-gray-light capitalize">{title}</span>
      <button
        className={clsx("md:max-w-[13em] pb-6 md:pb-0 text-left", {
          underline,
        })}
        type="button"
      >
        {data}
      </button>
    </div>
  );
};

export const FooterContactItem = memo(FooterContactItemComponent);
