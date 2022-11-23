import { WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, memo, useCallback } from "react";

import { ProjectFilterTypes } from "../../../types/projectFilterTypes";
import { StrapiCategory } from "../../../types/strapiRelatedItem";
import { webPaths } from "../../../webpaths";

import { ProjectGridTitle } from "./ProjectGridTitle";
import { ProjectTags } from "./ProjectTags";

interface ProjectGridItemTypes {
  colSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowStart: number;
  rowEnd: number;
  title?: string;
  imgSrc: string;
  tagArray?: StrapiCategory["data"];
  filterType?: ProjectFilterTypes;
}

const ProjectGridItemComponent: FC<ProjectGridItemTypes> = ({
  colEnd,
  colStart,
  rowEnd,
  rowStart,
  title,
  imgSrc,
  colSpan,
  tagArray,
  filterType,
}) => {
  const router = useRouter();
  const handleProjectClick = useCallback(() => {
    if (title !== undefined) {
      void router.push({
        pathname: `${webPaths.project}/${title}`,
      });
    }
  }, []);

  return (
    <WrapItem width="45%" height="20rem">
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
    </WrapItem>
  );
};

export const ProjectGridItem = memo(ProjectGridItemComponent);
