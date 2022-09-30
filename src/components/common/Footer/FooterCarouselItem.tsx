import clsx from "clsx";
import Image from "next/image";
import { memo, FC } from "react";

import { useGetUserAgent } from "../../../hooks/useGetUserAgent";

interface FooterCarouselItemTypes {
  src: string;
}

const FooterCarouselItemComponent: FC<FooterCarouselItemTypes> = ({ src }) => {
  const userAgent = useGetUserAgent();

  return (
    <div
      className={clsx("relative", {
        "mx-20": userAgent === "desktop",
        "mx-5": userAgent === "mobile",
      })}
    >
      <Image
        height={userAgent === "desktop" ? 110 : 80}
        src={src}
        width={userAgent === "desktop" ? 260 : 144}
      />
    </div>
  );
};

export const FooterCarouselItem = memo(FooterCarouselItemComponent);
