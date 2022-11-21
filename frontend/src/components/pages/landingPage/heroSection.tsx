import clsx from "clsx";
import Image from "next/image";
import { memo, FC } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { PageTitle } from "../../common/Title/PageTitle";

const HeroSectionComponent: FC = (): JSX.Element => {
  const deviceState = useGetUserAgent();

  return (
    <section
      className={clsx(
        "w-full h-auto flex flex-col min-h-screen -top-12 relative",
      )}
    >
      <Image
        alt="hero-image"
        height={720}
        layout={deviceState === "desktop" ? "responsive" : "fill"}
        src={
          deviceState === "desktop"
            ? "/images/hero.png"
            : "/images/hero_mobile.png"
        }
        width={1440}
      />
      <div
        className={clsx("leading-none relative", {
          "flex flex-col justify-end mx-2 bottom-4 min-h-[95vh]":
            deviceState === "mobile",
          "-top-[8.75rem] ml-7": deviceState === "desktop",
        })}
      >
        <span className="text-white flex md:text-[24px] text-[18px] text-opacity-50 uppercase">
          {"Creative agency"}
        </span>
        <PageTitle className="text-white" text={"Whitedog Media"} />
      </div>
    </section>
  );
};

export const HeroSection = memo(HeroSectionComponent);
