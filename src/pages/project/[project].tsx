import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { SpecificProjectPage } from "../../components/pages/specificProjectPage/[project]";

const ProjectPage = (): JSX.Element => {
  return (
    <DefaultLayout>
      <SpecificProjectPage />
    </DefaultLayout>
  );
};

export default ProjectPage;
