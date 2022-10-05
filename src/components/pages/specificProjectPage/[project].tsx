import { memo, FC } from "react";

import { SpecificProjectPageTypes } from "../../../types/specificProjectPageTypes";
import { ProjectTags } from "../../common/ProjectGrid/ProjectTags";
import { PageTitle } from "../../common/Title/PageTitle";
import { SubTitle } from "../../common/Title/SubTitle";

const SpecificProjectPageComponent: FC<SpecificProjectPageTypes> = ({
  projectData,
}): JSX.Element => {
  return (
    <section
      className={"w-full h-auto flex flex-col min-h-screen md:px-8 px-2 pb-8"}
    >
      <div className="pt-14">
        <ProjectTags darkMode tagArray={projectData.tags} />
      </div>
      <PageTitle className="text-white pt-4" text={projectData.title} />
      <SubTitle className="text-white pt-4 pb-8" text={projectData.company} />
    </section>
  );
};

export const SpecificProjectPage = memo(SpecificProjectPageComponent);
