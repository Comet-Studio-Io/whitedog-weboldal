import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { SpecificProjectPage } from "../../components/pages/specificProjectPage/[project]";
import { SpecificProjectPageTypes } from "../../types/specificProjectPageTypes";

const ProjectPage = (): JSX.Element => {
  const router = useRouter();
  const [queryState, setQueryState] = useState<SpecificProjectPageTypes>({
    projectData: {
      company: "",
      tags: [],
      title: "",
    },
  });

  useEffect(() => {
    if (router.query !== undefined) {
      setQueryState({
        projectData: {
          ...queryState,
          company: router.query.company as string,
          tags: router.query.tags as string[],
          title: router.query.title as string,
        },
      });
    }
  }, [router.query]);

  return (
    <DefaultLayout>
      <SpecificProjectPage projectData={queryState.projectData} />
    </DefaultLayout>
  );
};

export default ProjectPage;
