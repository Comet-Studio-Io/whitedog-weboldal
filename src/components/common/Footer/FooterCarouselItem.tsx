import Image from "next/image";
import { memo, FC } from "react";

interface FooterCarouselItemTypes {
  src: string;
}

const FooterCarouselItemComponent: FC<FooterCarouselItemTypes> = ({ src }) => {
  return (
    <div className="relative mx-20">
      <Image height={110} layout={"intrinsic"} src={src} width={260} />
    </div>
  );
};

export const FooterCarouselItem = memo(FooterCarouselItemComponent);
