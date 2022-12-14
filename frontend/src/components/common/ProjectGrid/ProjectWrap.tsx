import { Wrap } from "@chakra-ui/react";
import clsx from "clsx";
import { FC, memo, ReactElement } from "react";

import { useZustandStore } from "../../../store/useStore";

interface ProjectWrapTypes {
  columns: number;
  rows: number;
  rowHeight?: string;
  children: ReactElement[];
  className?: string;
}

const ProjectWrapComponent: FC<ProjectWrapTypes> = ({
  children,
  columns,
  rows,
  rowHeight = "9.75vh",
  className,
}) => {
  const { selectedTag, projectFilter } = useZustandStore();

  return (
    <Wrap className={clsx("w-full h-auto pb-8", className)} gap={12}>
      {projectFilter !== "Összes" && selectedTag === undefined
        ? children.filter((e: ReactElement) =>
            projectFilter.includes(e.props?.filterType),
          )
        : projectFilter === "Összes" && selectedTag !== undefined
        ? children.filter((e: ReactElement) =>
            selectedTag.every((tag: string) => {
              return e.props.tagArray?.some(
                (childTag: { attributes: { name: string } }) => {
                  return childTag.attributes.name === tag;
                },
              );
            }),
          )
        : projectFilter !== "Összes" && selectedTag !== undefined
        ? children.filter((e: ReactElement) =>
            selectedTag.every((tag: string) => {
              return (
                projectFilter.includes(e.props?.filterType) &&
                e.props.tagArray?.some(
                  (childTag: { attributes: { name: string } }) => {
                    return childTag.attributes.name === tag;
                  },
                )
              );
            }),
          )
        : children}
    </Wrap>
  );
};

export const ProjectWrap = memo(ProjectWrapComponent);
