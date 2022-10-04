import { FC, memo } from "react";

import { ProjectTag } from "./ProjectTag";

interface ProjectTagsTypes {
  tagArray: string[];
  darkMode?: boolean;
}

const ProjectTagsComponent: FC<ProjectTagsTypes> = ({
  tagArray,
  darkMode = false,
}) => {
  return (
    <div className="flex flex-row">
      {tagArray.map(tag => {
        return <ProjectTag key={tag} darkMode={darkMode} text={tag} />;
      })}
    </div>
  );
};

export const ProjectTags = memo(ProjectTagsComponent);
