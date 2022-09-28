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
        <span className="text-white text-opacity-[72%] relative md:top-4 md:px-4 top-3 px-3 uppercase z-10 md:text-2xl text-lg">
          {title}
        </span>
        <Image
          className={"object-fill rounded-xl"}
          layout="fill"
          src={imgSrc}
        />
        {tag1 !== undefined && (
          <div className="py-2 px-4 bg-black bg-opacity-[48%] absolute md:bottom-4 md:left-4 bottom-3 left-3 rounded-full">
            <span className="text-white text-opacity-[72%] capitalize z-10">
              {tag1}
            </span>
          </div>
        )}
        {tag2 !== undefined && (
          <div className="py-2 px-4 bg-black bg-opacity-[48%] absolute md:bottom-4 bottom-3 left-[7.5rem] rounded-full">
            <span className="text-white text-opacity-[72%] capitalize z-10">
              {tag2}
            </span>
          </div>
        )}
      </div>
    </GridItem>
  );
};

export const ProjectGridItem = memo(ProjectGridItemComponent);
