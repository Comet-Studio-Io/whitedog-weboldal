import { FC, ReactNode } from "react";

import { ProjectGrid } from "../ProjectGrid/ProjectGrid";
import { Title } from "../Title/Title";

interface RelatedProjectsTypes {
  title: string;
  projectAmount?: number;
  gridRows: number;
  gridColumns: number;
  children: ReactNode[];
}

export const RelatedProjects: FC<RelatedProjectsTypes> = ({
  title,
  projectAmount,
  gridColumns,
  gridRows,
  children,
}) => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-6 bg-secondary">
      <Title className={"text-white"} text={title} />
      <ProjectGrid columns={gridColumns - 1} rows={gridRows - 1}>
        {children}
      </ProjectGrid>
    </div>
  );
};
