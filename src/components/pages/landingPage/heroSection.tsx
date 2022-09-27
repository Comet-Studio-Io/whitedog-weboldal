import Image from "next/image";
import { memo, FC } from "react";

const HeroSectionComponent: FC = (): JSX.Element => {
  return (
    <section className="w-full h-auto flex flex-col">
      <Image
        alt="hero-image"
        className="absolute"
        height={720}
        layout="responsive"
        src="/images/hero.png"
        width={1440}
      />
      <div className="relative -top-[8.75rem] ml-7 leading-none">
        <span className="text-white flex md:text-[24px] text-[18px] text-opacity-50 uppercase">
          {"Creative agency"}
        </span>
        <span className="text-white md:text-[5.5rem] text-[40px] leading-none">
          {"Whitedog Media"}
        </span>
      </div>
    </section>
  );
};

export const HeroSection = memo(HeroSectionComponent);
