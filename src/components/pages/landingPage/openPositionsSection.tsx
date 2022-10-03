import { memo, FC, useMemo } from "react";

import { ListItem } from "../../common/List/ListItem";
import { Title } from "../../common/Title/Title";

const OpenPositionsSectionComponent: FC = () => {
  const openPositionsList = useMemo(
    () => [
      {
        data: " — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec interdum neque, sit amet dapibus nibh. Mauris sed neque eu nulla ultrices bibendum id nec massa. Quisque laoreet vehicula urna, ut pretium diam pelda.email@whitedogmedia.hu vitae.",
        title: "Account Manager",
      },
      {
        data: " — Ügyfeleink arculatát a legújabb trendeket és piaci kihívásokat szem előtt tartva fejlesztjük, minden részletre odafigyelve.",
        title: "Production Manager",
      },
      {
        data: " — A komplex integrált kampányoktól kezdve az egycsatornás taktikai kampányokig minden feladat egyformán fontos számunkra",
        title: "Junior Account Manager",
      },
    ],
    [],
  );

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-black">
      <Title className={"text-white"} text={"nyitott pozíciók"} />
      {openPositionsList.map(service => {
        return (
          <ListItem
            key={service.title}
            dark={false}
            data={service.data}
            title={service.title}
          />
        );
      })}
    </section>
  );
};

export const OpenPositionsSection = memo(OpenPositionsSectionComponent);
