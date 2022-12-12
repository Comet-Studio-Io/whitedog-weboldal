import { useRouter } from "next/router";
import { memo, FC, useEffect, useState } from "react";

import { useGetProject } from "../../../hooks/useGetProject";
import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { useZustandStore } from "../../../store/useStore";
import { StrapiProjectGridItem } from "../../../types/strapiProjectGridItem";
import { ListItem } from "../../common/List/ListItem";
import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";
import { ProjectTags } from "../../common/ProjectGrid/ProjectTags";
import { PageTitle } from "../../common/Title/PageTitle";
import { SubTitle } from "../../common/Title/SubTitle";

const SpecificProjectPageComponent: FC = (): JSX.Element => {
  const router = useRouter();

  const { data, status, fetch } = useGetProject(
    String(router.query.project)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""),
  );

  useEffect(() => {
    if (router.isReady) {
      void fetch({
        queryKey: String(router.query.project)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""),
      });
    }
    useZustandStore.setState({ selectedTag: [], projectFilter: "Összes" });
  }, [router]);

  const deviceState = useGetUserAgent();
  const projectData = data?.attributes;

  const [currentProjectData, setCurrentProjectData] =
    useState<StrapiProjectGridItem>();

  useEffect(() => {
    setCurrentProjectData(projectData?.project.data.attributes);
    console.log(projectData);
  }, [projectData]);

  return (
    <section className={"w-full h-auto flex flex-col min-h-screen"}>
      {projectData !== undefined &&
      currentProjectData !== undefined &&
      status === "success" ? (
        <>
          <div className={"flex flex-col w-full md:px-8 px-2 pb-20"}>
            <div className="pt-14">
              <ProjectTags
                darkMode
                tagArray={currentProjectData.project_categories?.data}
              />
            </div>
            <PageTitle className="text-white pt-4" text={projectData.title} />
            <SubTitle
              className="text-white pt-4 pb-8"
              text={projectData.company}
            />
            {deviceState === "mobile" ? (
              <ProjectGrid
                columns={5}
                rows={projectData.project_image.length * 3}
              >
                {projectData.project_image.map((project, i) => {
                  return (
                    <ProjectGridItem
                      key={project.id}
                      colSpan={5}
                      imgSrc={project.featured_image.data.attributes.url}
                      rowEnd={i + 4 + i * 2}
                      rowStart={i + 1 + i * 2}
                    />
                  );
                })}
              </ProjectGrid>
            ) : (
              <ProjectGrid
                columns={7}
                rows={projectData.project_image.at(-1)?.rowEnd ?? 1}
              >
                {projectData.project_image.map(project => {
                  const { colEnd, colStart, rowEnd, rowStart } = project;

                  return (
                    <ProjectGridItem
                      key={project.id}
                      colEnd={colEnd}
                      colStart={colStart}
                      imgSrc={project.featured_image.data.attributes.url}
                      rowEnd={rowEnd}
                      rowStart={rowStart}
                    />
                  );
                })}
              </ProjectGrid>
            )}
            <div className="pt-6">
              {projectData.services?.map(service => {
                return (
                  <ListItem
                    key={service.title}
                    dark={false}
                    data={service.description}
                    title={service.title}
                  />
                );
              })}
            </div>
          </div>
          {/* {projectData.projects?.data.length === 3 &&
          relatedProject1 !== undefined &&
          relatedProject2 !== undefined ? (
            deviceState === "mobile" ? (
              <RelatedProjects
                gridColumns={5}
                gridRows={projectData.projects?.data.length * 3}
                title="Kapcsolódó projektek"
              >
                {projectData.projects?.data.map((project, i) => {
                  return (
                    <ProjectGridItem
                      key={project.id}
                      colSpan={5}
                      imgSrc={
                        project.attributes.featured_image.data.attributes.url
                      }
                      rowEnd={i + 4 + i * 2}
                      rowStart={i + 1 + i * 2}
                      tagArray={project.attributes.project_categories.data}
                      title={project.attributes.title}
                    />
                  );
                })}
              </RelatedProjects>
            ) : (
              <RelatedProjects
                gridColumns={7}
                gridRows={6}
                title="Kapcsolódó projektek"
              >
                <ProjectGridItem
                  colEnd={5}
                  colStart={1}
                  imgSrc={relatedProject1.featured_image.data.attributes.url}
                  rowEnd={6}
                  rowStart={1}
                  tagArray={relatedProject1.project_categories.data}
                  title={relatedProject1.title}
                />
                <ProjectGridItem
                  colEnd={8}
                  colStart={5}
                  imgSrc={relatedProject2.featured_image.data.attributes.url}
                  rowEnd={6}
                  rowStart={3}
                  tagArray={relatedProject2.project_categories.data}
                  title={relatedProject2.title}
                />
              </RelatedProjects>
            )
          ) : null} */}
        </>
      ) : null}
    </section>
  );
};

export const SpecificProjectPage = memo(SpecificProjectPageComponent);
