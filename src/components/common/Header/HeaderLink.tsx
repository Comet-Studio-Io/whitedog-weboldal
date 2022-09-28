import { FC, memo } from "react";

interface HeaderLinkTypes {
  link: string;
}
const HeaderLinkComponent: FC<HeaderLinkTypes> = ({ link }) => {
  return (
    <a className="uppercase md:px-4 px-2 text-white opacity-50" href={link}>
      {link}
    </a>
  );
};

export const HeaderLink = memo(HeaderLinkComponent);
