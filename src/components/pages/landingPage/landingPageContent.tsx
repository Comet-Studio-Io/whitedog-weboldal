import { memo, FC } from "react";

import { ProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import { ProjectGridItem } from "../../common/ProjectGrid/ProjectGridItem";

const LandingPageContentComponent: FC = () => {
  return (
    <section className="flex flex-col justify-start items-start w-full h-auto px-8">
      <div className="flex">
        <span className="text-white w-2/3 text-[1.75rem] py-6">
          {
            "Az ügyfeleknek valójában nem egyszerűen a brief alapján készülő kreatívokra, hanem üzleti problémájuk megoldására van szükségük — ezért mi kreatív, személyre szabott kommunikációs és üzletviteli megoldásokat nyújtunk számukra."
          }
        </span>
      </div>

      <span className="uppercase text-text-gray-light pt-14 pb-8">
        {"Projektek"}
      </span>
      <ProjectGrid columns={7} rows={22}>
        <ProjectGridItem
          colEnd={5}
          colStart={1}
          imgSrc={"/images/projects/epkar.gif"}
          rowEnd={6}
          rowStart={1}
          title={"épkar"}
        />
        <ProjectGridItem
          colEnd={8}
          colStart={5}
          imgSrc={"/images/projects/gallio.gif"}
          rowEnd={5}
          rowStart={1}
          title={"gallio"}
        />
        <ProjectGridItem
          colSpan={7}
          imgSrc={"/images/projects/ds.gif"}
          rowEnd={15}
          rowStart={6}
          title={"dustin"}
        />
        <ProjectGridItem
          colEnd={4}
          colStart={1}
          imgSrc={"/images/projects/mkb-lakasfelujitas.gif"}
          rowEnd={22}
          rowStart={17}
          title={"mkb"}
        />
        <ProjectGridItem
          colEnd={8}
          colStart={4}
          imgSrc={"/images/projects/ikea-demo.gif"}
          rowEnd={22}
          rowStart={15}
          title={"épkar"}
        />
      </ProjectGrid>
    </section>
  );
};

export const LandingPageContent = memo(LandingPageContentComponent);
