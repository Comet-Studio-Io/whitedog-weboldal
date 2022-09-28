import { FC, memo } from "react";

interface ProjectTagTypes {
  text: string;
}

const ProjectTagComponent: FC<ProjectTagTypes> = ({ text }) => {
  return (
    <div className="py-2 px-4 bg-black bg-opacity-[48%] hover:bg-[#1D1D1D] duration-300 transition-all text-white hover:text-[#C1C1C1] hover:bg-opacity-100 rounded-full mr-1 cursor-pointer">
      <span className="capitalize z-10">{text}</span>
    </div>
  );
};

export const ProjectTag = memo(ProjectTagComponent);
