import { memo } from "react";

const FooterComponent = (): JSX.Element => {
  return (
    <footer className="h-16 w-full bg- justify-around items-center flex flex-row">
      <span className="text-text_gray_dark font-bold drop-shadow-md">
        {"Kapcsolat"}
      </span>
    </footer>
  );
};

export const Footer = memo(FooterComponent);
