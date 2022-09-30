import { memo, FC } from "react";

import InfiniteCarouselLoop from "../InfiniteLoopCarousel/InfiniteLoopCarousel";

import { FooterCarouselItem } from "./FooterCarouselItem";

const FooterCarouselComponent: FC = () => {
  return (
    <div className="flex justify-center items-center flex-row h-auto w-full pb-20">
      <InfiniteCarouselLoop direction="left" durationInSeconds={50}>
        <FooterCarouselItem src={"/images/footer/BANKHOLDING.svg"} />
        <FooterCarouselItem src={"/images/footer/MKB.svg"} />
        <FooterCarouselItem src={"/images/footer/hunguest.svg"} />
        <FooterCarouselItem src={"/images/footer/gallio.svg"} />
        <FooterCarouselItem src={"/images/footer/team.svg"} />
        <FooterCarouselItem src={"/images/footer/aqua lorenzo.svg"} />
      </InfiniteCarouselLoop>
    </div>
  );
};

export const FooterCarousel = memo(FooterCarouselComponent);
