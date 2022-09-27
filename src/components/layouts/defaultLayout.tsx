import type { FC, ReactNode } from "react";

import { Footer } from "../common/Footer/Footer";
import { Header } from "../common/Header/Header";

interface DefaultLayoutTypes {
  children: ReactNode | ReactNode[];
}

export const DefaultLayout: FC<DefaultLayoutTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-auto flex items-center flex-col">{children}</main>
      <Footer />
    </>
  );
};
