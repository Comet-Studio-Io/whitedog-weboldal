import { GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { FC, memo } from "react";

import { ProjectGridTitle } from "./ProjectGridTitle";
import { ProjectTag } from "./ProjectTag";

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
        <ProjectGridTitle text={title} />
        <Image
          className="object-cover h-full rounded-xl"
          layout={"fill"}
          src={imgSrc}
        />
        <div className="absolute md:bottom-4 md:left-4 bottom-3 left-3 flex flex-row">
          {tag1 !== undefined && <ProjectTag text={tag1} />}
          {tag2 !== undefined && <ProjectTag text={tag2} />}
        </div>
      </div>
    </GridItem>
  );
};

export const ProjectGridItem = memo(ProjectGridItemComponent);
