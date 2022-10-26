import { FC, memo } from "react";

import { StrapiCategory } from "../../../types/strapiRelatedItem";

import { ProjectTag } from "./ProjectTag";

interface ProjectTagsTypes {
  tagArray: StrapiCategory["data"];
  darkMode?: boolean;
}

const ProjectTagsComponent: FC<ProjectTagsTypes> = ({
  tagArray,
  darkMode = false,
}) => {
  return (
    <div className="flex flex-row">
      {tagArray?.map((tag, i) => {
        return (
          <ProjectTag key={i} darkMode={darkMode} text={tag.attributes?.name} />
        );
      })}
    </div>
  );
};

export const ProjectTags = memo(ProjectTagsComponent);
