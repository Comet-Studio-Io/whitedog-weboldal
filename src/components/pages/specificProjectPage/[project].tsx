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

  return (
    <section className={"w-full h-auto flex flex-col min-h-screen"}>
      {data !== undefined && status === "success" ? (
        <>
          <div className={"flex flex-col w-full md:px-8 px-2 pb-8"}>
            <div className="pt-14">
              <ProjectTags darkMode tagArray={data?.attributes.data.tags} />
            </div>
            <PageTitle
              className="text-white pt-4"
              text={data?.attributes.data.title}
            />
            <SubTitle
              className="text-white pt-4 pb-8"
              text={data?.attributes.data.company}
            />
            {deviceState === "mobile" ? (
              <ProjectGrid
                columns={5}
                rows={data.attributes.ProjectGridItem.length * 3}
              >
                {data.attributes.ProjectGridItem.map((project, i) => {
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
                rows={data.attributes.ProjectGridItem.at(-1)?.data.rowEnd ?? 1}
              >
                {data.attributes.ProjectGridItem.map(project => {
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
              {data.attributes.list?.map(service => {
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
          {deviceState === "mobile" ? (
            <RelatedProjects
              gridColumns={5}
              gridRows={data.attributes.relatedProjects.length * 4}
              title="Kapcsolódó projektek"
            >
              {data.attributes.relatedProjects.map((project, i) => {
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
              gridRows={
                data.attributes.relatedProjects.at(-1)?.data.rowEnd ?? 1
              }
              title="Kapcsolódó projektek"
            >
              {data.attributes.relatedProjects.map(project => {
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
          )}
        </>
      ) : null}
    </section>
  );
};

export const SpecificProjectPage = memo(SpecificProjectPageComponent);
