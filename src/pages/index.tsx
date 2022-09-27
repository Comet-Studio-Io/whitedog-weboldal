import type { NextPage } from "next";

import { DefaultLayout } from "../components/layouts/defaultLayout";
import { HeroSection } from "../components/pages/landingPage/heroSection";
import { LandingPageContent } from "../components/pages/landingPage/landingPageContent";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <LandingPageContent />
    </DefaultLayout>
  );
};

export default Home;
