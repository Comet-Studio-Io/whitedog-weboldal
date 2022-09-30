import Image from "next/image";
import { memo, FC, MouseEventHandler } from "react";

interface NewsSlideshowItemTypes {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  date: string;
  src: string;
}
const NewsSlideshowItemComponent: FC<NewsSlideshowItemTypes> = ({
  onClick,
  text,
  date,
  src,
}) => {
  return (
    <div className="flex flex-col w-auto h-auto">
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
      <div className="flex-col h-auto w-auto max-w-[336px]">
        <span className="text-white hover:underline transition-all duration-300 cursor-pointer">
          {text}
        </span>
        <span className="text-text-gray-light flex">{date}</span>
      </div>
    </div>
  );
};

export const NewsSlideshowItem = memo(NewsSlideshowItemComponent);
