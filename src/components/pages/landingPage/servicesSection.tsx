import clsx from "clsx";
import { memo, FC } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";

const ServicesSectionComponent: FC = () => {
  const deviceState = useGetUserAgent();

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20">
      <div className="flex">
        <span
          className={clsx("text-white py-6", {
            "text-[1.375rem]": deviceState === "mobile",
            "text-[1.75rem] w-2/3": deviceState === "desktop",
          })}
        >
          {
            "Az ügyfeleknek valójában nem egyszerűen a brief alapján készülő kreatívokra, hanem üzleti problémájuk megoldására van szükségük — ezért mi kreatív, személyre szabott kommunikációs és üzletviteli megoldásokat nyújtunk számukra."
          }
        </span>
      </div>

      <div className="w-full text-left pt-20 pb-8">
        <span className="uppercase text-text-gray-light">{"Projektek"}</span>
      </div>
    </section>
  );
};

export const ServicesSection = memo(ServicesSectionComponent);
