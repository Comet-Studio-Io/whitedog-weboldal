import { memo, FC } from "react";

interface FooterSocialItemTypes {
  href: string;
  SVGIcon: FC<React.SVGProps<SVGSVGElement>>;
}

const FooterSocialItemComponent: FC<FooterSocialItemTypes> = ({
  SVGIcon,
  href,
}) => {
  return (
    <a href={href}>
      <SVGIcon
        className="hover:text-black text-text-gray-light fill-current duration-300 transition-all"
        height={24}
        width={24}
      />
    </a>
  );
};

export const FooterSocialItem = memo(FooterSocialItemComponent);
