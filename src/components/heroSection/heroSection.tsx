import Image from "next/image";
import { memo, FC } from "react";

const HeroSectionComponent: FC = (): JSX.Element => {
  return (
    <section className="w-full h-1/2 flex flex-col">
      <Image
        alt="hero-image"
        className="absolute z-0"
        height={720}
        layout="responsive"
        src="/images/hero.png"
        width={1440}
      />
      <div className="relative -top-44 ml-7">
        <span className="text-white flex text-[24px] text-opacity-50 font-light uppercase">
          {"Creative agency"}
        </span>
        <span className="text-white text-6xl text-[88px]">
          {"Whitedog Media"}
        </span>
      </div>
    </section>
  );
};

export const HeroSection = memo(HeroSectionComponent);
