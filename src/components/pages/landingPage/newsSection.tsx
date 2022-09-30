import { memo, FC, useState, useCallback, MouseEvent, useMemo } from "react";

import { NewsNavbarTypes } from "../../../types/newsNavbarTypes";
import { NewsNavbarItem } from "../../common/News/NewsNavbarItem";
import { NewsSlideshowItem } from "../../common/News/NewsSlideshowItem";
import { Title } from "../../common/Title/Title";

const NewsSectionComponent: FC = () => {
  const [selectedSection, setSelectedSection] =
    useState<NewsNavbarTypes>("Összes");

  const handleNavbarClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSelectedSection(e.currentTarget.value as NewsNavbarTypes);
  }, []);

  const navbarOptions: NewsNavbarTypes[] = useMemo(() => {
    return ["Összes", "Díjak", "Publikációk", "Sajtómegjelenések"];
  }, []);

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-secondary">
      <Title className={"text-white"} text={"Aktualitások"} />
      <div className="flex flex-row w-full h-auto space-x-3 pb-8">
        {navbarOptions.map(option => {
          return (
            <NewsNavbarItem
              key={option}
              active={selectedSection === option}
              text={option}
              onClick={handleNavbarClick}
            />
          );
        })}
      </div>
      <div className="flex flex-row w-full h-auto space-x-3">
        <NewsSlideshowItem
          date="Február 12."
          src="/images/news/news1.png"
          text="A Whitedog Mediát díjazták a Cannes Corporate Media & TV Awardson"
        />
        <NewsSlideshowItem
          date="Február 12."
          src="/images/news/news2.png"
          text="Aenean nec interdum neque, sit amet dapibus nibh. Mauris sed neque eu nulla ultrices bibendum id nec massa. "
        />
      </div>
    </section>
  );
};

export const NewsSection = memo(NewsSectionComponent);
