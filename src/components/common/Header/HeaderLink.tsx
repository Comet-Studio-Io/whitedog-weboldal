import { FC, memo } from "react";

interface HeaderLinkTypes {
  link: string;
}
const HeaderLinkComponent: FC<HeaderLinkTypes> = ({ link }) => {
  return (
    <a
      className="uppercase md:px-4 px-2 text-white text-opacity-50 hover:text-opacity-100 transition-all duration-300"
      href={link}
    >
      {link}
    </a>
  );
};

export const HeaderLink = memo(HeaderLinkComponent);
