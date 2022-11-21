import clsx from "clsx";
import { memo, FC, useMemo, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import { useGetNews } from "../../../hooks/useGetNews";
import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { NewsFilterTypes } from "../../../types/newsFilterTypes";
import { Navbar } from "../../common/Navbar/Navbar";
import { SlideshowItem } from "../../common/Slideshow/SlideshowItem";
import { Title } from "../../common/Title/Title";

const NewsSectionComponent: FC = () => {
  const userAgent = useGetUserAgent();

  const { data } = useGetNews();

  const navbarOptions: NewsFilterTypes[] = useMemo(() => {
    // return ["Összes", "Díjak", "Publikációk", "Sajtómegjelenések"];
    return [];
  }, []);

  const containerRef = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(containerRef, {
    applyRubberBandEffect: true,
    decayRate: 0.98,
  });

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-secondary">
      <Title className={"text-white"} text={"Aktualitások"} />
      <Navbar data={navbarOptions} setZustandItem={"newsFilter"} />
      <div
        ref={containerRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...events}
        className={clsx("max-w-[99vw] flex flex-row md:px-7 px-2", {
          "overflow-x-hidden": userAgent === "desktop",
          "overflow-x-auto": userAgent === "mobile",
        })}
      >
        <div className="space-x-3 inline-flex">
          {data?.map(newsItem => {
            return (
              <SlideshowItem
                key={newsItem.id}
                date={newsItem.attributes.Date}
                filterType={
                  newsItem.attributes.news_categories.data[0].attributes.name
                }
                src={newsItem.attributes.featured_image.data.attributes.url}
                text={newsItem.attributes.Title}
                url={newsItem.attributes.Url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const NewsSection = memo(NewsSectionComponent);
