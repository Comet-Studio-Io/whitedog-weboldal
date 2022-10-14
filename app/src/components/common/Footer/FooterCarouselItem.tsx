import clsx from "clsx";
import { memo, FC } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";

interface FooterCarouselItemTypes {
  SVGIcon: FC<React.SVGProps<SVGSVGElement>>;
}

const FooterCarouselItemComponent: FC<FooterCarouselItemTypes> = ({
  SVGIcon,
}) => {
  const userAgent = useGetUserAgent();

  return (
    <div
      className={clsx("relative flex justify-center items-center", {
        "mx-20 max-w-[260px] max-h-[110px] w-[260px] h-[110px]":
          userAgent === "desktop",
        "mx-5 max-w-[144px] max-h-[80px]": userAgent === "mobile",
      })}
    >
      <SVGIcon
        className="hover:text-black cursor-pointer text-text-gray-light fill-current transition-all duration-300"
        height={userAgent === "desktop" ? 110 : 80}
        width={userAgent === "desktop" ? 260 : 144}
      />
    </div>
  );
};

export const FooterCarouselItem = memo(FooterCarouselItemComponent);
