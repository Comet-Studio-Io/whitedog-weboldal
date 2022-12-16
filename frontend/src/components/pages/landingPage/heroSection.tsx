import Vimeo from "@u-wave/react-vimeo";
import clsx from "clsx";
import { memo, FC } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { PageTitle } from "../../common/Title/PageTitle";

const HeroSectionComponent: FC = (): JSX.Element => {
  const deviceState = useGetUserAgent();

  return (
    <div className={clsx("w-full flex flex-col height header")}>
      <div className={clsx("w-full flex flex-col")}>
        <Vimeo
          video="https://vimeo.com/721417008"
          responsive
          controls={false}
          autoplay
        />
        <div
          className={clsx("leading-none relative", {
            "flex flex-col justify-end mx-2 bottom-4 min-h-[95vh]":
              deviceState === "mobile",
            "ml-7": deviceState === "desktop",
          })}
        >
          <span className="text-white flex md:text-[24px] text-[18px] text-opacity-50 uppercase">
            {"Creative agency"}
          </span>
          <PageTitle className="text-white" text={"Whitedog Media"} />
        </div>
      </div>
    </div>
  );
};

export const HeroSection = memo(HeroSectionComponent);
