import { memo, FC } from "react";

import { ProjectTags } from "../../common/ProjectGrid/ProjectTags";

interface SpecificProjectPageTypes {
  tagArray: string[];
}

const SpecificProjectPageComponent: FC<SpecificProjectPageTypes> = ({
  tagArray,
}): JSX.Element => {
  return (
    <section
      className={"w-full h-auto flex flex-col min-h-screen md:px-8 px-2 pb-8"}
    >
      <div className="pt-14">
        <ProjectTags darkMode tagArray={tagArray} />
      </div>
    </section>
  );
};

export const SpecificProjectPage = memo(SpecificProjectPageComponent);
