import type { NextPage } from "next";

import { DefaultLayout } from "../components/layouts/defaultLayout";
import { ProjectsPage } from "../components/pages/projectsPage/projects";

const Projects: NextPage = () => {
  return (
    <DefaultLayout>
      <ProjectsPage />
    </DefaultLayout>
  );
};

export default Projects;
