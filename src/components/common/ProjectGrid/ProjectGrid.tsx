import { Grid } from "@chakra-ui/react";
import clsx from "clsx";
import { FC, memo, ReactNode } from "react";

interface ProjectGridTypes {
  columns: number;
  rows: number;
  rowHeight?: string;
  children: ReactNode[];
  className?: string;
}

const ProjectGridComponent: FC<ProjectGridTypes> = ({
  children,
  columns,
  rows,
  rowHeight = "9.75vh",
  className,
}) => {
  return (
    <Grid
      className={clsx("w-full h-auto pb-8", className)}
      gap={12}
      templateColumns={`repeat(${columns}, 1fr)`}
      templateRows={`repeat(${rows}, ${rowHeight})`}
    >
      {children}
    </Grid>
  );
};

export const ProjectGrid = memo(ProjectGridComponent);
