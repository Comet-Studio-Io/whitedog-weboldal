import { FC, ReactElement } from "react";

import { ProjectGrid } from "../ProjectGrid/ProjectGrid";
import { Title } from "../Title/Title";

interface RelatedProjectsTypes {
  title: string;
  gridRows: number;
  gridColumns: number;
  children: ReactElement[];
}

export const RelatedProjects: FC<RelatedProjectsTypes> = ({
  title,
  gridColumns,
  gridRows,
  children,
}) => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-6 bg-secondary">
      <Title className={"text-white"} text={title} />
      <ProjectGrid columns={gridColumns} rows={gridRows}>
        {children}
      </ProjectGrid>
    </div>
  );
};
