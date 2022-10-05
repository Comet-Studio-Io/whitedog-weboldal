import { GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, memo, useCallback } from "react";

import { webPaths } from "../../../webpaths";

import { ProjectGridTitle } from "./ProjectGridTitle";
import { ProjectTags } from "./ProjectTags";

interface ProjectGridItemTypes {
  colSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowStart: number;
  rowEnd: number;
  title: string;
  projectTitle: string;
  company: string;
  imgSrc: string;
  tagArray?: string[];
}

const ProjectGridItemComponent: FC<ProjectGridItemTypes> = ({
  colEnd,
  colStart,
  rowEnd,
  rowStart,
  title,
  projectTitle,
  company,
  imgSrc,
  colSpan,
  tagArray,
}) => {
  const router = useRouter();
  const handleProjectClick = useCallback(() => {
    void router.push({
      pathname: `${webPaths.project}/${title}`,
      query: { tags: tagArray, title: projectTitle, company },
    });
  }, []);

  return (
    <GridItem
      colEnd={colEnd}
      colSpan={colSpan}
      colStart={colStart}
      rowEnd={rowEnd}
      rowStart={rowStart}
    >
      <div
        className="w-full h-full relative"
        role={"button"}
        tabIndex={0}
        onClick={handleProjectClick}
        onKeyDown={handleProjectClick}
      >
        <ProjectGridTitle text={title} />
        <Image
          priority
          className="object-cover h-full rounded-xl hover:rounded-none transition-all duration-500"
          layout={"fill"}
          src={imgSrc}
        />
        {tagArray !== undefined && (
          <div className="absolute md:bottom-4 md:left-4 bottom-3 left-3">
            <ProjectTags tagArray={tagArray} />
          </div>
        )}
      </div>
    </GridItem>
  );
};

export const ProjectGridItem = memo(ProjectGridItemComponent);
