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
      <Image height={20} src={src} width={20} />
    </a>
  );
};

export const FooterSocialItem = memo(FooterSocialItemComponent);
