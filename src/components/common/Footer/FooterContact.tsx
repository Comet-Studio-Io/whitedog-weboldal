import { memo, FC } from "react";

import { FooterContactItem } from "./FooterContactItem";

const FooterContactComponent: FC = () => {
  return (
    <div className="flex flex-col md:flex-row lg:w-1/2 justify-between pt-10">
      <FooterContactItem data="1062 Budapest, Andrássy út 105." title="cím" />
      <FooterContactItem data="office@whitedogmedia.hu" title="email" />
      <FooterContactItem
        data="+36 1 8888 888"
        title="telefon"
        underline={false}
      />
    </div>
  );
};

export const FooterContact = memo(FooterContactComponent);
