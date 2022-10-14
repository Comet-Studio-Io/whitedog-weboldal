import Link from "next/link";
import { FC, memo } from "react";

interface HeaderLinkTypes {
  href: string;
  text: string;
}
const HeaderLinkComponent: FC<HeaderLinkTypes> = ({ href, text }) => {
  return (
    <Link passHref href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <span className="uppercase text-white text-opacity-50 hover:text-opacity-100 transition-all duration-300">
          {text}
        </span>
      </a>
    </Link>
  );
};

export const HeaderLink = memo(HeaderLinkComponent);
