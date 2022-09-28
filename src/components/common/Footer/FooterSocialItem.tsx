import Image from "next/image";
import { memo, FC } from "react";

interface FooterSocialItemTypes {
  href: string;
  src: string;
}

const FooterSocialItemComponent: FC<FooterSocialItemTypes> = ({
  src,
  href,
}) => {
  return (
    <a href={href}>
      <Image
        className="hover:text-black text-text-gray-light fill-current duration-300 transition-all"
        height={20}
        src={src}
        width={20}
      />
    </a>
  );
};

export const FooterSocialItem = memo(FooterSocialItemComponent);
