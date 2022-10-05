import { useRouter } from "next/router";
import { memo, FC, useCallback } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { webPaths } from "../../../webpaths";
import { Button } from "../../common/Button/Button";
import { Description } from "../../common/Description/Description";
import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";
import { Title } from "../../common/Title/Title";

const ProjectsSectionComponent: FC = () => {
  const router = useRouter();
  const deviceState = useGetUserAgent();

  const handleProjectButtonClick = useCallback(() => {
    void router.push(webPaths.projects);
  }, []);

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20">
      <Description
        className="text-white lg:w-2/3"
        text={
          "Az ügyfeleknek valójában nem egyszerűen a brief alapján készülő kreatívokra, hanem üzleti problémájuk megoldására van szükségük — ezért mi kreatív, személyre szabott kommunikációs és üzletviteli megoldásokat nyújtunk számukra."
        }
      />

      <Title className={"text-primary-gray"} text={"Projektek"} />

      {deviceState === "mobile" ? (
        <ProjectGrid columns={5} rows={15}>
          <ProjectGridItem
            colSpan={5}
            company="Cég"
            imgSrc={"/images/projects/high-tech-suli.gif"}
            projectTitle="Cég termék kampány"
            rowEnd={4}
            rowStart={1}
            tagArray={["branding", "advertising"]}
            title={"high tech suli"}
          />
          <ProjectGridItem
            colSpan={5}
            company="Cég"
            imgSrc={"/images/projects/gallio.gif"}
            projectTitle="Cég termék kampány"
            rowEnd={7}
            rowStart={4}
            tagArray={["branding"]}
            title={"gallio"}
          />
          <ProjectGridItem
            colSpan={5}
            company="Cég"
            imgSrc={"/images/projects/ds.gif"}
            projectTitle="Cég termék kampány"
            rowEnd={10}
            rowStart={7}
            tagArray={["branding"]}
            title={"dustin"}
          />
          <ProjectGridItem
            colSpan={5}
            company="Cég"
            imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
            projectTitle="Cég termék kampány"
            rowEnd={13}
            rowStart={10}
            tagArray={["branding"]}
            title={"mkb"}
          />
          <ProjectGridItem
            colSpan={5}
            company="Cég"
            imgSrc={"/images/projects/ikea-demo.gif"}
            projectTitle="Cég termék kampány"
            rowEnd={16}
            rowStart={13}
            tagArray={["branding", "advertising"]}
            title={"épkar"}
          />
        </ProjectGrid>
      ) : (
        <ProjectGrid columns={7} rows={21}>
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
        </ProjectGrid>
      )}
      <Button text="összes projekt" onClick={handleProjectButtonClick} />
    </section>
  );
};

export const ProjectsSection = memo(ProjectsSectionComponent);
