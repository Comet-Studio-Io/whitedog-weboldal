import { Collapse } from "@chakra-ui/react";
import clsx from "clsx";
import { FC, memo, useEffect, useRef, useState } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";

interface ListItemTypes {
  title: string;
  data: string;
  dark?: boolean;
}

const ListItemComponent: FC<ListItemTypes> = ({ title, data, dark = true }) => {
  const textContainerRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(false);
  const userAgent = useGetUserAgent();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const distanceToTop =
        textContainerRef.current?.getBoundingClientRect().top;
      if (
        distanceToTop !== undefined &&
        textContainerRef.current?.clientHeight !== undefined
      ) {
        if (userAgent === "desktop") {
          if (
            distanceToTop > window.innerHeight / 2 - 80 &&
            distanceToTop < window.innerHeight / 2 + 80
          ) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        }
      }
    });
  }, [textContainerRef.current]);

  return (
    <span
      ref={textContainerRef}
      className={clsx(
        "md:text-[1.75rem] text-[1.375rem] w-full text-left transition-all duration-1500",
        {
          "text-black": isActive && dark,
          "text-white": isActive && !dark,
          "text-text-gray-light": !isActive,
        },
      )}
    >
      {isActive ? (
        <span className="flex flex-row">
          <Collapse in={isActive}>{`${title} — ${data}`}</Collapse>
        </span>
      ) : (
        <span>{title}</span>
      )}
      <hr
        className={clsx("h-1 w-full border-t-2 border-solid my-4", {
          "border-black": isActive,
          "border-white": isActive && !dark,
          "border-text-gray-light": !isActive,
        })}
      />
    </span>
  );
};

export const ListItem = memo(ListItemComponent);
