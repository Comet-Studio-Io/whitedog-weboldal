import Image from "next/image";
import { FC, memo } from "react";

import { HeaderLink } from "./HeaderLink";

const HeaderComponent: FC = (): JSX.Element => {
  return (
    <header className="h-12 justify-between w-full px-8 absolute items-center flex flex-row z-20">
      <Image
        alt="header-icon"
        height={24}
        src="/images/headerIcon.svg"
        width={43}
      />
      <div>
        <HeaderLink link="projektek" />
        <HeaderLink link="kapcsolat" />
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
