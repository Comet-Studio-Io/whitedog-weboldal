import { FC, memo } from "react";

interface ProjectGridTitleTypes {
  text: string;
}

const ProjectGridTitleComponent: FC<ProjectGridTitleTypes> = ({ text }) => {
  return (
    <span className="text-white text-opacity-[72%] transition-all duration-300 hover:text-opacity-100 relative md:top-4 md:px-4 top-3 px-3 uppercase z-10 md:text-2xl text-lg cursor-pointer">
      {text}
    </span>
  );
};

export const ProjectGridTitle = memo(ProjectGridTitleComponent);
