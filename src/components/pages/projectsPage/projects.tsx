import { memo, FC, useMemo } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { ProjectNavbarTypes } from "../../../types/projectsNavbarTypes";
import { Navbar } from "../../common/Navbar/Navbar";
import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";
import { Title } from "../../common/Title/Title";

const ProjectsPageComponent: FC = (): JSX.Element => {
  const navbarOptions: ProjectNavbarTypes[] = useMemo(() => {
    return ["Összes", "Arculat", "Filmgyártás", "Webfejlesztés"];
  }, []);

  const deviceState = useGetUserAgent();

  return (
    <section
      className={"w-full h-auto flex flex-col min-h-screen md:px-8 px-2 pb-8"}
    >
      <Title className="text-primary-gray" text="Projektek" />
      <Navbar data={navbarOptions} />
      {deviceState === "mobile" ? (
        <ProjectGrid columns={5} rows={22}>
          <ProjectGridItem
            colSpan={5}
            imgSrc={"/images/projects/high-tech-suli.gif"}
            rowEnd={4}
            rowStart={1}
            tag1={"branding"}
            tag2={"advertising"}
            title={"high tech suli"}
          />
          <ProjectGridItem
            colSpan={5}
            imgSrc={"/images/projects/gallio.gif"}
            rowEnd={7}
            rowStart={4}
            tag1={"branding"}
            title={"gallio"}
          />
          <ProjectGridItem
            colSpan={5}
            imgSrc={"/images/projects/ds.gif"}
            rowEnd={10}
            rowStart={7}
            tag1={"branding"}
            title={"dustin"}
          />
          <ProjectGridItem
            colSpan={5}
            imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
            rowEnd={13}
            rowStart={10}
            tag1={"branding"}
            title={"mkb"}
          />
          <ProjectGridItem
            colSpan={5}
            imgSrc={"/images/projects/ikea-demo.gif"}
            rowEnd={16}
            rowStart={13}
            tag1={"branding"}
            tag2={"advertising"}
            title={"épkar"}
          />
          <ProjectGridItem
            colSpan={5}
            imgSrc={"/images/projects/high-tech-suli.gif"}
            rowEnd={19}
            rowStart={16}
            tag1={"branding"}
            tag2={"advertising"}
            title={"high tech suli"}
          />
          <ProjectGridItem
            colSpan={5}
            imgSrc={"/images/projects/gallio.gif"}
            rowEnd={23}
            rowStart={20}
            tag1={"branding"}
            title={"gallio"}
          />
        </ProjectGrid>
      ) : (
        <ProjectGrid columns={7} rows={33}>
          <ProjectGridItem
            colEnd={5}
            colStart={1}
            imgSrc={"/images/projects/epkar.gif"}
            rowEnd={6}
            rowStart={1}
            tag1={"branding"}
            tag2={"advertising"}
            title={"épkar"}
          />
          <ProjectGridItem
            colEnd={8}
            colStart={5}
            imgSrc={"/images/projects/gallio.gif"}
            rowEnd={5}
            rowStart={1}
            tag1={"branding"}
            title={"gallio"}
          />
          <ProjectGridItem
            colSpan={7}
            imgSrc={"/images/projects/ds.gif"}
            rowEnd={15}
            rowStart={6}
            tag1={"branding"}
            title={"dustin"}
          />
          <ProjectGridItem
            colEnd={4}
            colStart={1}
            imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
            rowEnd={22}
            rowStart={17}
            tag1={"branding"}
            title={"mkb"}
          />
          <ProjectGridItem
            colEnd={8}
            colStart={4}
            imgSrc={"/images/projects/ikea-demo.gif"}
            rowEnd={22}
            rowStart={15}
            tag1={"branding"}
            tag2={"advertising"}
            title={"épkar"}
          />
          <ProjectGridItem
            colEnd={5}
            colStart={1}
            imgSrc={"/images/projects/epkar.gif"}
            rowEnd={27}
            rowStart={22}
            tag1={"branding"}
            tag2={"advertising"}
            title={"épkar"}
          />
          <ProjectGridItem
            colEnd={8}
            colStart={5}
            imgSrc={"/images/projects/gallio.gif"}
            rowEnd={26}
            rowStart={22}
            tag1={"branding"}
            title={"gallio"}
          />
          <ProjectGridItem
            colEnd={4}
            colStart={1}
            imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
            rowEnd={34}
            rowStart={29}
            tag1={"branding"}
            title={"mkb"}
          />
          <ProjectGridItem
            colEnd={8}
            colStart={4}
            imgSrc={"/images/projects/ikea-demo.gif"}
            rowEnd={34}
            rowStart={27}
            tag1={"branding"}
            tag2={"advertising"}
            title={"épkar"}
          />
        </ProjectGrid>
      )}
    </section>
  );
};

export const ProjectsPage = memo(ProjectsPageComponent);
