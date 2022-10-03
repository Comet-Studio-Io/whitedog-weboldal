import {
  memo,
  FC,
  useState,
  useCallback,
  MouseEvent,
  useMemo,
  useRef,
} from "react";
import { useDraggable } from "react-use-draggable-scroll";

import useHorizontalScroll from "../../../hooks/useHorizontalScroll";
import { NewsNavbarTypes } from "../../../types/newsNavbarTypes";
import { NavbarItem } from "../../common/Navbar/NavbarItem";
import { SlideshowItem } from "../../common/Slideshow/SlideshowItem";
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

  const newsItemsList = useMemo(
    () => [
      {
        date: "Február 12.",
        src: "/images/news/news1.png",
        text: "A Whitedog Mediát díjazták a Cannes Corporate Media & TV Awardson",
      },
      {
        date: "Február 12.",
        src: "/images/news/news2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        date: "Február 12.",
        src: "/images/news/news3.png",
        text: "Aenean nec interdum neque, sit amet dapibus nibh. Mauris sed neque eu nulla ultrices bibendum id nec massa. ",
      },
      {
        date: "Február 12.",
        src: "/images/news/news4.png",
        text: "Duis sed enim nec ligula mattis fringilla vitae quis tortor.",
      },
      {
        date: "Február 12.",
        src: "/images/news/news1.png",
        text: "A Whitedog Mediát díjazták a Cannes Corporate Media & TV Awardson",
      },
      {
        date: "Február 12.",
        src: "/images/news/news2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        date: "Február 12.",
        src: "/images/news/news3.png",
        text: "Aenean nec interdum neque, sit amet dapibus nibh. Mauris sed neque eu nulla ultrices bibendum id nec massa. ",
      },
      {
        date: "Február 12.",
        src: "/images/news/news4.png",
        text: "Duis sed enim nec ligula mattis fringilla vitae quis tortor.",
      },
      {
        date: "Február 12.",
        src: "/images/news/news1.png",
        text: "A Whitedog Mediát díjazták a Cannes Corporate Media & TV Awardson",
      },
      {
        date: "Február 12.",
        src: "/images/news/news2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        date: "Február 12.",
        src: "/images/news/news3.png",
        text: "Aenean nec interdum neque, sit amet dapibus nibh. Mauris sed neque eu nulla ultrices bibendum id nec massa. ",
      },
      {
        date: "Február 12.",
        src: "/images/news/news4.png",
        text: "Duis sed enim nec ligula mattis fringilla vitae quis tortor.",
      },
    ],
    [],
  );

  const containerRef = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(containerRef, {
    applyRubberBandEffect: true,
    decayRate: 0.98,
  });

  useHorizontalScroll(containerRef);

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-secondary">
      <Title className={"text-white"} text={"Aktualitások"} />
      <div className="flex flex-row w-full h-auto space-x-3 pb-8">
        {navbarOptions.map(option => {
          return (
            <NavbarItem
              key={option}
              active={selectedSection === option}
              text={option}
              onClick={handleNavbarClick}
            />
          );
        })}
      </div>
      <div
        ref={containerRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...events}
        className="max-w-[99vw] flex flex-row md:px-7 px-2 overflow-x-hidden"
      >
        <div className="space-x-3 inline-flex">
          {newsItemsList.map(service => {
            return (
              <SlideshowItem
                key={service.text}
                date={service.date}
                src={service.src}
                text={service.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const NewsSection = memo(NewsSectionComponent);
