import clsx from "clsx";
import { FC, memo } from "react";

interface ProjectTagTypes {
  text: string;
  darkMode?: boolean;
}

const ProjectTagComponent: FC<ProjectTagTypes> = ({
  text,
  darkMode = false,
}) => {
  return (
    <div
      className={clsx(
        "py-2 px-4  duration-300 transition-all text-white hover:text-[#C1C1C1] hover:bg-opacity-100 rounded-full mr-1 cursor-pointer",
        {
          "hover:bg-opacity-[48%] bg-[#1D1D1D]": darkMode,
          "bg-black bg-opacity-[48%] hover:bg-[#1D1D1D]": !darkMode,
        },
      )}
    >
      <span className="capitalize z-10">{text}</span>
    </div>
  );
};

export const ProjectTag = memo(ProjectTagComponent);
