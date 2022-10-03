import FBIcon from "public/images/socials/fb-icon.svg";
import InstaIcon from "public/images/socials/insta-icon.svg";
import LinkedinIcon from "public/images/socials/linkedin-icon.svg";
import YTIcon from "public/images/socials/yt-icon.svg";
import { memo, FC } from "react";

import { FooterSocialItem } from "./FooterSocialItem";

const FooterSocialsComponent: FC = () => {
  return (
    <div className="flex flex-row space-x-6 pt-10">
      <FooterSocialItem SVGIcon={FBIcon} href={"https://www.facebook.com/"} />
      <FooterSocialItem
        SVGIcon={InstaIcon}
        href={"https://www.instagram.com/"}
      />
      <FooterSocialItem
        SVGIcon={LinkedinIcon}
        href={"https://www.linkedin.com/"}
      />
      <FooterSocialItem SVGIcon={YTIcon} href={"https://www.youtube.com/"} />
    </div>
  );
};

export const FooterSocials = memo(FooterSocialsComponent);
