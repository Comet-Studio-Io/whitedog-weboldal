import { useRouter } from "next/router";
import { memo, FC, useEffect } from "react";

import { useGetProject } from "../../../hooks/useGetProject";
import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { ListItem } from "../../common/List/ListItem";
import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";
import { ProjectTags } from "../../common/ProjectGrid/ProjectTags";
import { RelatedProjects } from "../../common/RelatedProjects/RelatedProjects";
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
  }, [router]);

  const deviceState = useGetUserAgent();
  const projectData = data?.attributes.data;

  return (
    <section className={"w-full h-auto flex flex-col min-h-screen"}>
      {projectData !== undefined && status === "success" ? (
        <>
          <div className={"flex flex-col w-full md:px-8 px-2 pb-8"}>
            <div className="pt-14">
              <ProjectTags darkMode tagArray={projectData.details.tags} />
            </div>
            <PageTitle
              className="text-white pt-4"
              text={projectData.details.title}
            />
            <SubTitle
              className="text-white pt-4 pb-8"
              text={projectData.details.company}
            />
            {deviceState === "mobile" ? (
              <ProjectGrid
                columns={5}
                rows={projectData.ProjectGridItem.length * 3}
              >
                {projectData.ProjectGridItem.map((project, i) => {
                  const { tags, title } = project.data;

                  return (
                    <ProjectGridItem
                      key={project.id}
                      colSpan={5}
                      imgSrc={
                        String(process.env.NEXT_PUBLIC_API_URL) +
                        project.image.data.attributes.url
                      }
                      rowEnd={i + 4 + i * 2}
                      rowStart={i + 1 + i * 2}
                      tagArray={tags}
                      title={title}
                    />
                  );
                })}
              </ProjectGrid>
            ) : (
              <ProjectGrid
                columns={7}
                rows={projectData.ProjectGridItem.at(-1)?.data.rowEnd ?? 1}
              >
                {projectData.ProjectGridItem.map(project => {
                  const { tags, title, colEnd, colStart, rowEnd, rowStart } =
                    project.data;

                  return (
                    <ProjectGridItem
                      key={project.id}
                      colEnd={colEnd}
                      colStart={colStart}
                      imgSrc={
                        String(process.env.NEXT_PUBLIC_API_URL) +
                        project.image.data.attributes.url
                      }
                      rowEnd={rowEnd}
                      rowStart={rowStart}
                      tagArray={tags}
                      title={title}
                    />
                  );
                })}
              </ProjectGrid>
            )}
            <div className="pt-6">
              {projectData.ListItem?.map(service => {
                return (
                  <ListItem
                    key={service.data.title}
                    dark={false}
                    data={service.data.data}
                    title={service.data.title}
                  />
                );
              })}
            </div>
          </div>
          {projectData.RelatedProjects.length > 0 ? (
            deviceState === "mobile" ? (
              <RelatedProjects
                gridColumns={5}
                gridRows={projectData.RelatedProjects.length * 4}
                title="Kapcsolódó projektek"
              >
                {projectData.RelatedProjects.map((project, i) => {
                  const { tags, title } = project.data;

                  return (
                    <ProjectGridItem
                      key={project.id}
                      colSpan={5}
                      imgSrc={
                        String(process.env.NEXT_PUBLIC_API_URL) +
                        project.image.data.attributes.url
                      }
                      rowEnd={i + 4 + i * 2}
                      rowStart={i + 1 + i * 2}
                      tagArray={tags}
                      title={title}
                    />
                  );
                })}
              </RelatedProjects>
            ) : (
              <RelatedProjects
                gridColumns={7}
                gridRows={projectData.RelatedProjects.at(-1)?.data.rowEnd ?? 1}
                title="Kapcsolódó projektek"
              >
                {projectData.RelatedProjects.map(project => {
                  const { tags, title, colEnd, colStart, rowEnd, rowStart } =
                    project.data;

                  return (
                    <ProjectGridItem
                      key={project.id}
                      colEnd={colEnd}
                      colStart={colStart}
                      imgSrc={
                        String(process.env.NEXT_PUBLIC_API_URL) +
                        project.image.data.attributes.url
                      }
                      rowEnd={rowEnd}
                      rowStart={rowStart}
                      tagArray={tags}
                      title={title}
                    />
                  );
                })}
              </RelatedProjects>
            )
          ) : null}
        </>
      ) : null}
    </section>
  );
};

export const SpecificProjectPage = memo(SpecificProjectPageComponent);
