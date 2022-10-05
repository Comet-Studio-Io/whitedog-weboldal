import { memo, FC } from "react";

import { SpecificProjectPageTypes } from "../../../types/specificProjectPageTypes";
import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";
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
      {/* <ProjectGrid columns={7} rows={21}>
        <ProjectGridItem
          colEnd={5}
          colStart={1}
          company="Cég"
          imgSrc={"/images/projects/epkar.gif"}
          projectTitle="Cég termék kampány"
          rowEnd={6}
          rowStart={1}
          tagArray={["branding", "advertising"]}
          title={"épkar"}
        />
        <ProjectGridItem
          colEnd={8}
          colStart={5}
          company="Cég"
          imgSrc={"/images/projects/gallio.gif"}
          projectTitle="Cég termék kampány"
          rowEnd={5}
          rowStart={1}
          tagArray={["branding"]}
          title={"gallio"}
        />
        <ProjectGridItem
          colSpan={7}
          company="Cég"
          imgSrc={"/images/projects/ds.gif"}
          projectTitle="Cég termék kampány"
          rowEnd={15}
          rowStart={6}
          tagArray={["branding"]}
          title={"dustin"}
        />
        <ProjectGridItem
          colEnd={4}
          colStart={1}
          company="Cég"
          imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
          projectTitle="Cég termék kampány"
          rowEnd={22}
          rowStart={17}
          tagArray={["branding"]}
          title={"mkb"}
        />
        <ProjectGridItem
          colEnd={8}
          colStart={4}
          company="Cég"
          imgSrc={"/images/projects/ikea-demo.gif"}
          projectTitle="Cég termék kampány"
          rowEnd={22}
          rowStart={15}
          tagArray={["branding", "advertising"]}
          title={"épkar"}
        />
      </ProjectGrid> */}
    </section>
  );
};

export const SpecificProjectPage = memo(SpecificProjectPageComponent);
