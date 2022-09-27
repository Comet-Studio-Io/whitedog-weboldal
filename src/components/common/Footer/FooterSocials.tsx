import { memo, FC } from "react";

import { FooterSocialItem } from "./FooterSocialItem";

const FooterSocialsComponent: FC = () => {
  return (
    <div className="flex flex-row space-x-6 pt-10">
      <FooterSocialItem
        href={"https://www.facebook.com/"}
        src="/images/socials/fb-icon.svg"
      />
      <FooterSocialItem
        href={"https://www.instagram.com/"}
        src="/images/socials/insta-icon.svg"
      />
      <FooterSocialItem
        href={"https://www.linkedin.com/"}
        src="/images/socials/linkedin-icon.svg"
      />
      <FooterSocialItem
        href={"https://www.youtube.com/"}
        src="/images/socials/yt-icon.svg"
      />
    </div>
  );
};

export const FooterSocials = memo(FooterSocialsComponent);
