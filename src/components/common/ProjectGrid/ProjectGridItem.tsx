import { GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { FC, memo } from "react";

interface ProjectGridItemTypes {
  colSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowStart: number;
  rowEnd: number;
  title: string;
  imgSrc: string;
  tag1?: string;
  tag2?: string;
}

const ProjectGridItemComponent: FC<ProjectGridItemTypes> = ({
  colEnd,
  colStart,
  rowEnd,
  rowStart,
  title,
  imgSrc,
  colSpan,
  tag1,
  tag2,
}) => {
  return (
    <GridItem
      colEnd={colEnd}
      colSpan={colSpan}
      colStart={colStart}
      rowEnd={rowEnd}
      rowStart={rowStart}
    >
      <div className="w-full h-full relative">
        <span className="text-white text-opacity-[72%] relative top-4 px-4 uppercase z-10 text-2xl">
          {title}
        </span>
        <Image
          className="object-cover w-full h-auto rounded-xl"
          layout={"fill"}
          src={imgSrc}
        />
      </div>
    </GridItem>
  );
};

export const ProjectGridItem = memo(ProjectGridItemComponent);
