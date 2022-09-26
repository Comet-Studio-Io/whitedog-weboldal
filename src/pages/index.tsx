import type { NextPage } from "next";

import { HeroSection } from "../components/heroSection/heroSection";
import { DefaultLayout } from "../components/layouts/defaultLayout";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HeroSection />
    </DefaultLayout>
  );
};

export default Home;
