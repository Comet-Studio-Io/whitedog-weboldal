import { memo, FC, useMemo } from "react";

import { useGetProjects } from "../../../hooks/useGetProjects";
import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { ProjectFilterTypes } from "../../../types/projectFilterTypes";
import { Navbar } from "../../common/Navbar/Navbar";
import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";
import { Title } from "../../common/Title/Title";

const ProjectsPageComponent: FC = (): JSX.Element => {
  const navbarOptions: ProjectFilterTypes[] = useMemo(() => {
    // return ["Összes", "Arculat", "Filmgyártás", "Webfejlesztés"];
    return [];
  }, []);

  const deviceState = useGetUserAgent();

  const { data, status } = useGetProjects();

  return (
    <section
      className={
        "w-full h-auto flex flex-col min-h-screen md:px-8 px-2 pb-6 md:pb-12"
      }
    >
      <Title className="text-primary-gray" text="Projektek" />
      <Navbar data={navbarOptions} setZustandItem={"projectFilter"} />
      {data !== undefined &&
        status === "success" &&
        (deviceState === "mobile" ? (
          <ProjectGrid columns={5} rows={data?.length * 3}>
            {data.map((project, i) => (
              <ProjectGridItem
                key={project.id}
                colSpan={5}
                filterType={
                  project.attributes.project_filter.data.attributes.filter_name
                }
                imgSrc={project.attributes.featured_image.data.attributes.url}
                rowEnd={i + 4 + i * 2}
                rowStart={i + 1 + i * 2}
                tagArray={project.attributes.project_categories.data}
                title={project.attributes.title}
              />
            ))}
          </ProjectGrid>
        ) : (
          <ProjectGrid columns={7} rows={data.at(-1)?.attributes.rowEnd ?? 1}>
            {data.map(project => {
              const {
                colEnd,
                colStart,
                rowEnd,
                rowStart,
                title,
                project_filter: filter,
                featured_image: image,
                project_categories: tags,
              } = project.attributes;

              return (
                <ProjectGridItem
                  key={project.id}
                  colEnd={colEnd}
                  colStart={colStart}
                  filterType={filter.data.attributes.filter_name}
                  imgSrc={image.data.attributes.url}
                  rowEnd={rowEnd}
                  rowStart={rowStart}
                  tagArray={tags.data}
                  title={title}
                />
              );
            })}
          </ProjectGrid>
        ))}
    </section>
  );
};

export const ProjectsPage = memo(ProjectsPageComponent);
