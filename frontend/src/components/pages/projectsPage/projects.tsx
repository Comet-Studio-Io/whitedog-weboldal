import { memo, FC, useMemo } from "react";

import { useGetProjects } from "../../../hooks/useGetProjects";
import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { ProjectFilterTypes } from "../../../types/projectFilterTypes";
import { Navbar } from "../../common/Navbar/Navbar";
import { ProjectWrap } from "../../common/ProjectGrid/ProjectWrap";
import { ProjectWrapItem } from "../../common/ProjectGrid/ProjectWrapItem";
import { Title } from "../../common/Title/Title";

const ProjectsPageComponent: FC = (): JSX.Element => {
  const navbarOptions: ProjectFilterTypes[] = useMemo(() => {
    return ["Összes", "Arculat", "Filmgyártás", "Webfejlesztés"];
  }, []);

  const deviceState = useGetUserAgent();

  const { data, status } = useGetProjects();
  console.log("cica", data);
  return (
    <section
      className={"w-full h-auto flex flex-col md:px-8 px-2 pb-6 md:pb-12"}
    >
      <Title className="text-primary-gray" text="Projektek" />
      <Navbar data={navbarOptions} setZustandItem={"projectFilter"} />
      {data !== undefined &&
        status === "success" &&
        (deviceState === "mobile" ? (
          <ProjectWrap columns={5} rows={data?.length * 3}>
            {data.map((project, i) => {
              const {
                title,
                project_detail: detail,

                project_filter: filter,
                featured_image: image,
                project_categories: tags,
              } = project.attributes;
              return (
                <ProjectWrapItem
                  width="100%"
                  key={project.id}
                  colSpan={5}
                  filterType={filter.data?.attributes.filter_name}
                  imgSrc={image.data.attributes.url}
                  rowEnd={i + 4 + i * 2}
                  rowStart={i + 1 + i * 2}
                  tagArray={tags.data}
                  title={title}
                  URL={detail?.data?.attributes?.URL}
                  videoURL={detail?.data?.attributes?.video_url}
                />
              );
            })}
          </ProjectWrap>
        ) : (
          <ProjectWrap columns={7} rows={data.at(-1)?.attributes.rowEnd ?? 1}>
            {data.map(project => {
              const {
                colEnd,
                colStart,
                rowEnd,
                rowStart,
                title,
                project_detail: detail,

                project_filter: filter,
                featured_image: image,
                project_categories: tags,
              } = project.attributes;

              return (
                <ProjectWrapItem
                  width="49%"
                  key={project.id}
                  colEnd={colEnd}
                  colStart={colStart}
                  filterType={filter.data?.attributes.filter_name}
                  imgSrc={image.data.attributes.url}
                  rowEnd={rowEnd}
                  rowStart={rowStart}
                  tagArray={tags.data}
                  title={title}
                  URL={detail?.data?.attributes?.URL}
                />
              );
            })}
          </ProjectWrap>
        ))}
    </section>
  );
};

export const ProjectsPage = memo(ProjectsPageComponent);
