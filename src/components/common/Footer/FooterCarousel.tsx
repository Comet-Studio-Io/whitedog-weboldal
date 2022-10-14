import AquaLorenzoIcon from "public/images/footer/aqua lorenzo.svg";
import BankholdingIcon from "public/images/footer/BANKHOLDING.svg";
import GallioIcon from "public/images/footer/GALLIO.svg";
import HunguestIcon from "public/images/footer/hunguest.svg";
import MKBIcon from "public/images/footer/MKB.svg";
import TeamIcon from "public/images/footer/team.svg";
import { memo, FC } from "react";

import InfiniteCarouselLoop from "../InfiniteLoopCarousel/InfiniteLoopCarousel";

import { FooterCarouselItem } from "./FooterCarouselItem";

const FooterCarouselComponent: FC = () => {
  return (
    <div className="flex justify-center items-center flex-row h-auto w-full pb-20">
      <InfiniteCarouselLoop direction="left" durationInSeconds={50}>
        <FooterCarouselItem SVGIcon={BankholdingIcon} />
        <FooterCarouselItem SVGIcon={MKBIcon} />
        <FooterCarouselItem SVGIcon={HunguestIcon} />
        <FooterCarouselItem SVGIcon={GallioIcon} />
        <FooterCarouselItem SVGIcon={TeamIcon} />
        <FooterCarouselItem SVGIcon={AquaLorenzoIcon} />
      </InfiniteCarouselLoop>
    </div>
  );
};

export const FooterCarousel = memo(FooterCarouselComponent);
