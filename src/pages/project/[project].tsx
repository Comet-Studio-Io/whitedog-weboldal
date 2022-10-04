import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { SpecificProjectPage } from "../../components/pages/specificProjectPage/[project]";

const ProjectPage = (): JSX.Element => {
  const router = useRouter();
  const [tags, setTags] = useState<string[]>([""]);

  useEffect(() => {
    if (typeof router.query.tags === "string") {
      setTags([router.query.tags]);
    } else {
      setTags(router.query.tags as string[]);
    }
  }, [router.query]);

  return (
    <DefaultLayout>
      <SpecificProjectPage tagArray={tags} />
    </DefaultLayout>
  );
};

export default ProjectPage;
