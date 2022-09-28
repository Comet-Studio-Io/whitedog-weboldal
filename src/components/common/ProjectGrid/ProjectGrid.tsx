import { Grid } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

interface ProjectGridTypes {
  columns: number;
  rows: number;
  rowHeight?: string;
  children: ReactNode[];
}

const ProjectGridComponent: FC<ProjectGridTypes> = ({
  children,
  columns,
  rows,
  rowHeight = "9.75vh",
}) => {
  return (
    <Grid
      className="w-full min-h-screen h-max pb-12"
      gap={12}
      templateColumns={`repeat(${columns}, 1fr)`}
      templateRows={`repeat(${rows}, ${rowHeight})`}
    >
      {children}
    </Grid>
  );
};

export const ProjectGrid = memo(ProjectGridComponent);
