import { memo, FC, useMemo } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { ListItem } from "../../common/List/ListItem";
import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";
import { ProjectTags } from "../../common/ProjectGrid/ProjectTags";
import { RelatedProjects } from "../../common/RelatedProjects/RelatedProjects";
import { PageTitle } from "../../common/Title/PageTitle";
import { SubTitle } from "../../common/Title/SubTitle";

const SpecificProjectPageComponent: FC = (): JSX.Element => {
  const tags = ["branding"];
  const title = "Gallio Termékbevezető kampány";
  const company = "Galliocoop Zrt.";

  const servicesList = useMemo(() => {
    return [
      {
        title: "Feladat",
        data: " — Termékbevezető kampány készítése a Gallio négy új terméke számára.",
      },
      {
        title: "Megoldás",
        data: " — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec interdum neque, sit amet dapibus nibh. Mauris sed neque eu nulla ultrices bibendum id nec massa.",
      },
    ];
  }, []);

  const deviceState = useGetUserAgent();

  return (
    <section className={"w-full h-auto flex flex-col min-h-screen"}>
      <div className={"flex flex-col w-full md:px-8 px-2 pb-8"}>
        <div className="pt-14">
          <ProjectTags darkMode tagArray={tags} />
        </div>
        <PageTitle className="text-white pt-4" text={title} />
        <SubTitle className="text-white pt-4 pb-8" text={company} />
        {deviceState === "mobile" ? (
          <ProjectGrid columns={5} rows={15}>
            <ProjectGridItem
              colSpan={5}
              imgSrc={"/images/projects/gallio.gif"}
              rowEnd={4}
              rowStart={1}
            />
            <ProjectGridItem
              colSpan={5}
              imgSrc={"/images/projects/ds.gif"}
              rowEnd={7}
              rowStart={4}
            />
            <ProjectGridItem
              colSpan={5}
              imgSrc={"/images/projects/gallio2.gif"}
              rowEnd={10}
              rowStart={7}
            />
            <ProjectGridItem
              colSpan={5}
              imgSrc={"/images/projects/gallio4.png"}
              rowEnd={13}
              rowStart={10}
            />
            <ProjectGridItem
              colSpan={5}
              imgSrc={"/images/projects/gallio3.png"}
              rowEnd={16}
              rowStart={13}
            />
          </ProjectGrid>
        ) : (
          <ProjectGrid columns={7} rows={19}>
            <ProjectGridItem
              colEnd={8}
              colStart={1}
              imgSrc={"/images/projects/gallio.gif"}
              rowEnd={8}
              rowStart={1}
            />
            <ProjectGridItem
              colEnd={5}
              colStart={1}
              imgSrc={"/images/projects/ds.gif"}
              rowEnd={14}
              rowStart={8}
            />
            <ProjectGridItem
              colEnd={8}
              colStart={5}
              imgSrc={"/images/projects/gallio2.gif"}
              rowEnd={11}
              rowStart={8}
            />
            <ProjectGridItem
              colEnd={5}
              colStart={1}
              imgSrc={"/images/projects/gallio4.png"}
              rowEnd={20}
              rowStart={14}
            />
            <ProjectGridItem
              colEnd={8}
              colStart={5}
              imgSrc={"/images/projects/gallio3.png"}
              rowEnd={20}
              rowStart={16}
            />
          </ProjectGrid>
        )}
        <div className="pt-6">
          {servicesList.map(service => {
            return (
              <ListItem
                key={service.title}
                dark={false}
                data={service.data}
                title={service.title}
              />
            );
          })}
        </div>
      </div>
      {deviceState === "mobile" ? (
        <RelatedProjects
          gridColumns={5}
          gridRows={7}
          title="Kapcsolódó projektek"
        >
          <ProjectGridItem
            colEnd={5}
            colStart={1}
            imgSrc={"/images/projects/ikea-demo.gif"}
            rowEnd={4}
            rowStart={1}
            tagArray={["advertising"]}
            title={"mkb"}
          />
          <ProjectGridItem
            colEnd={5}
            colStart={1}
            imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
            rowEnd={7}
            rowStart={4}
            tagArray={["branding", "advertising"]}
            title={"épkar"}
          />
        </RelatedProjects>
      ) : (
        <RelatedProjects
          gridColumns={7}
          gridRows={6}
          title="Kapcsolódó projektek"
        >
          <ProjectGridItem
            colEnd={8}
            colStart={5}
            imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
            rowEnd={7}
            rowStart={3}
            tagArray={["branding", "advertising"]}
            title={"épkar"}
          />
          <ProjectGridItem
            colEnd={5}
            colStart={1}
            imgSrc={"/images/projects/ikea-demo.gif"}
            rowEnd={7}
            rowStart={1}
            tagArray={["branding"]}
            title={"mkb"}
          />
        </RelatedProjects>
      )}
    </section>
  );
};

export const SpecificProjectPage = memo(SpecificProjectPageComponent);
