import type { NextPage } from "next";

import { DefaultLayout } from "../components/layouts/defaultLayout";
import { HeroSection } from "../components/pages/landingPage/heroSection";
import { NewsSection } from "../components/pages/landingPage/newsSection";
import { OpenPositionsSection } from "../components/pages/landingPage/openPositionsSection";
import { ProjectsSection } from "../components/pages/landingPage/projectsSection";
import { ServicesSection } from "../components/pages/landingPage/servicesSection";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <OpenPositionsSection />
      <NewsSection />
    </DefaultLayout>
  );
};

export default Home;
