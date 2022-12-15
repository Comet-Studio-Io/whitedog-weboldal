import YTIcon from "public/images/socials/yt-icon.svg";
import { memo, FC } from "react";

import { FooterSocialItem } from "./FooterSocialItem";

const FooterSocialsComponent: FC = () => {
  return (
    <div className="flex flex-row space-x-6 pt-10">
      <FooterSocialItem SVGIcon={YTIcon} href={"https://www.youtube.com/"} />
    </div>
  );
};

export const FooterSocials = memo(FooterSocialsComponent);
