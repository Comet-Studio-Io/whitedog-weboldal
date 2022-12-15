import clsx from "clsx";
import Image from "next/image";
import { memo, FC } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { PageTitle } from "../../common/Title/PageTitle";

const HeroSectionComponent: FC = (): JSX.Element => {
  const deviceState = useGetUserAgent();

  return (
    <div className={clsx("w-full flex flex-col")}>
      <div className={clsx("w-full flex flex-col relative -top-12")}>
        <Image
          alt="hero-image"
          height={720}
          objectFit="cover"
          layout={deviceState === "desktop" ? "responsive" : "fill"}
          src={
            deviceState === "desktop"
              ? "/images/hero.jpg"
              : "/images/hero_mobile.png"
          }
          width={1440}
        />
      </div>
      <div
        className={clsx("leading-none relative", {
          "flex flex-col justify-end mx-2 bottom-4 min-h-[95vh]":
            deviceState === "mobile",
          "-top-[11.75rem] ml-7": deviceState === "desktop",
        })}
      >
        <span className="text-white flex md:text-[24px] text-[18px] text-opacity-50 uppercase">
          {"Creative agency"}
        </span>
        <PageTitle className="text-white" text={"Whitedog Media"} />
      </div>
    </div>
  );
};

export const HeroSection = memo(HeroSectionComponent);
