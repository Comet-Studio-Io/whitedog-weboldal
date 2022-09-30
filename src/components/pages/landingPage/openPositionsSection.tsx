import { memo, FC, useState, useCallback, MouseEvent } from "react";

import { ServiceItem } from "../../common/Services/ServicesItem";
import { Title } from "../../common/Title/Title";

const OpenPositionsSectionComponent: FC = () => {
  const [selectedSection, setSelectedSection] = useState("Account Manager");

  const handleServiceItemClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setSelectedSection(e.currentTarget.value);
    },
    [],
  );

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-black">
      <Title className={"text-white"} text={"nyitott pozíciók"} />
      <ServiceItem
        active={selectedSection === "Account Manager"}
        dark={false}
        data="— Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec interdum neque, sit amet dapibus nibh. Mauris sed neque eu nulla ultrices bibendum id nec massa. Quisque laoreet vehicula urna, ut pretium diam pelda.email@whitedogmedia.hu vitae."
        title="Account Manager"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Production Manager"}
        dark={false}
        data=" — Ügyfeleink arculatát a legújabb trendeket és piaci kihívásokat szem előtt tartva fejlesztjük, minden részletre odafigyelve."
        title="Production Manager"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Junior Account Manager"}
        dark={false}
        data=" – A komplex integrált kampányoktól kezdve az egycsatornás taktikai kampányokig minden feladat egyformán fontos számunkra"
        title="Junior Account Manager"
        onClick={handleServiceItemClick}
      />
    </section>
  );
};

export const OpenPositionsSection = memo(OpenPositionsSectionComponent);
