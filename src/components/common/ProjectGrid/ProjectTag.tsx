import { FC, memo } from "react";

interface ProjectTagTypes {
  text: string;
}

const ProjectTagComponent: FC<ProjectTagTypes> = ({ text }) => {
  return (
    <div className="py-2 px-4 bg-black bg-opacity-[48%] rounded-full mr-1">
      <span className="text-white text-opacity-[72%] capitalize z-10">
        {text}
      </span>
    </div>
  );
};

export const ProjectTag = memo(ProjectTagComponent);
