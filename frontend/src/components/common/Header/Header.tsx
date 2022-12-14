import Image from "next/image";
import { FC, memo } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";
import { webPaths } from "../../../webpaths";

import { HeaderLink } from "./HeaderLink";

const HeaderComponent: FC = (): JSX.Element => {
  const userAgent = useGetUserAgent();

  return (
    <header className="h-12 justify-between w-full md:px-8 px-2 items-center flex flex-row z-20 absolute">
      <a href={webPaths.home}>
        <Image
          priority
          alt="header-icon"
          height={24}
          src="/images/headerIcon.svg"
          width={43}
        />
      </a>
      <div className="space-x-6">
        <HeaderLink href={webPaths.projects} text={"Projektek"} />
        {userAgent === "desktop" && (
          <HeaderLink href="#footer" text={"Kapcsolat"} />
        )}
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
