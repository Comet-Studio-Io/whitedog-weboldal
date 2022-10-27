import Image from "next/image";
import { memo, FC } from "react";

import { useZustandStore } from "../../../store/useStore";

interface SlideshowItemTypes {
  url: string;
  text: string;
  date: string;
  src: string;
  filterType?: string;
}
const SlideshowItemComponent: FC<SlideshowItemTypes> = ({
  url,
  text,
  date,
  src,
  filterType,
}) => {
  const { newsFilter } = useZustandStore();

  return newsFilter === filterType || newsFilter === "Összes" ? (
    <a
      aria-label="open link"
      className="inline-flex flex-col w-max h-auto"
      href={url}
    >
      <div
        className={
          "cursor-pointer flex flex-col justify-center items-center h-auto w-auto relative max-w-[336px] max-h-[250px]"
        }
      >
        <Image
          className="object-fill"
          height={250}
          layout="intrinsic"
          src={src}
          width={336}
        />
      </div>
      <div className="flex-col h-auto w-auto max-w-[336px] pt-3 whitespace-normal">
        <span className="text-white hover:underline transition-all duration-300 cursor-pointer">
          {text}
        </span>
        <span className="text-text-gray-light flex">{date}</span>
      </div>
    </a>
  ) : null;
};

export const SlideshowItem = memo(SlideshowItemComponent);
