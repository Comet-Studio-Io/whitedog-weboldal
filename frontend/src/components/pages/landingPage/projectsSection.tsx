import { useRouter } from "next/router";
import { memo, FC, useCallback } from "react";

import { useGetProjects } from "../../../hooks/useGetProjects";
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

  const { data, status } = useGetProjects();

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 md:pb-20 pb-14">
      <Description
        className="text-white lg:w-2/3"
        text={
          "Az ügyfeleknek valójában nem egyszerűen a brief alapján készülő kreatívokra, hanem üzleti problémájuk megoldására van szükségük — ezért mi kreatív, személyre szabott kommunikációs és üzletviteli megoldásokat nyújtunk számukra."
        }
      />

      <Title className={"text-primary-gray"} text={"Projektek"} />
      {data !== undefined &&
        status === "success" &&
        (deviceState === "mobile" ? (
          <ProjectGrid columns={5} rows={data.length * 3}>
            {data.map((project, i) => (
              <ProjectGridItem
                key={project.id}
                colSpan={5}
                imgSrc={`
                ${String(process.env.NEXT_PUBLIC_API_URL)}/api/upload/files/${
                  project.attributes.ProjectGridItem.image.data.attributes
                    .hash +
                  project.attributes.ProjectGridItem.image.data.attributes.ext
                }`}
                rowEnd={i + 4 + i * 2}
                rowStart={i + 1 + i * 2}
                tagArray={project.attributes.ProjectGridItem.data.tags}
                title={project.attributes.ProjectGridItem.data.title}
              />
            ))}
          </ProjectGrid>
        ) : (
          <ProjectGrid
            columns={7}
            rows={data.at(-1)?.attributes.ProjectGridItem.data.rowEnd ?? 1}
          >
            {data.map(project => {
              console.log(
                `
                ${String(process.env.NEXT_PUBLIC_API_URL)}/api/upload/files/${
                  project.attributes.ProjectGridItem.image.data.attributes
                    .hash +
                  project.attributes.ProjectGridItem.image.data.attributes.ext
                }`,
                process.env.NEXT_PUBLIC_API_URL,
              );

              return (
                <ProjectGridItem
                  key={project.id}
                  colEnd={project.attributes.ProjectGridItem.data.colEnd}
                  colStart={project.attributes.ProjectGridItem.data.colStart}
                  imgSrc={`
                ${String(process.env.NEXT_PUBLIC_API_URL)}/api/upload/files/${
                    project.attributes.ProjectGridItem.image.data.attributes
                      .hash +
                    project.attributes.ProjectGridItem.image.data.attributes.ext
                  }`}
                  rowEnd={project.attributes.ProjectGridItem.data.rowEnd}
                  rowStart={project.attributes.ProjectGridItem.data.rowStart}
                  tagArray={project.attributes.ProjectGridItem.data.tags}
                  title={project.attributes.ProjectGridItem.data.title}
                />
              );
            })}
          </ProjectGrid>
        ))}

      <Button text="összes projekt" onClick={handleProjectButtonClick} />
    </section>
  );
};

export const ProjectsSection = memo(ProjectsSectionComponent);
