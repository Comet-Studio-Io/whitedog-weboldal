import { memo } from "react";

import { FooterCarousel } from "./FooterCarousel";
import { FooterContact } from "./FooterContact";
import { FooterSocials } from "./FooterSocials";

const FooterComponent = (): JSX.Element => {
  return (
    <footer className="bg-primary-gray justify-start items-start flex flex-row w-full">
      <div className="pt-10 px-2 md:px-8 w-full">
        <FooterCarousel />
        <span className="text-text-gray-dark text-[40px] md:text-[5.5rem]">
          {"Kapcsolat"}
        </span>
        <FooterSocials />
        <FooterContact />
        <div className="flex justify-end text-text-gray-light lg:-top-6 relative items-end lg:pb-4 pb-14">
          <span>
            {"Copyright © 2022 WhiteDogMedia. Minden jog fenntartva."}
          </span>
        </div>
      </div>
    </footer>
  );
};

export const Footer = memo(FooterComponent);
