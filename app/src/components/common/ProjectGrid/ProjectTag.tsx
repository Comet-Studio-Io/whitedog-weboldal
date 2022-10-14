import clsx from "clsx";
import { useRouter } from "next/router";
import { FC, memo, MouseEvent, useCallback } from "react";

import { useZustandStore } from "../../../store/useStore";
import { webPaths } from "../../../webpaths";

interface ProjectTagTypes {
  text: string;
  darkMode?: boolean;
}

const ProjectTagComponent: FC<ProjectTagTypes> = ({
  text,
  darkMode = false,
}) => {
  const router = useRouter();
  const handleTagClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      useZustandStore.setState({ selectedTag: [text] });
      void router.push(webPaths.projects);
    },
    [text],
  );

  return (
    <button
      className={clsx(
        "py-2 px-4 z-10 relative duration-300 transition-all text-white hover:text-[#C1C1C1] hover:bg-opacity-100 rounded-full mr-1 cursor-pointer",
        {
          "hover:bg-opacity-[48%] bg-[#1D1D1D]": darkMode,
          "bg-black bg-opacity-[48%] hover:bg-[#1D1D1D]": !darkMode,
        },
      )}
      type="button"
      value={text}
      onClick={handleTagClick}
    >
      <span className="capitalize z-10">{text}</span>
    </button>
  );
};

export const ProjectTag = memo(ProjectTagComponent);
