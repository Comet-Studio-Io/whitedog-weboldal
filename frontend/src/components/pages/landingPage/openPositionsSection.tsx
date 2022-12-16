import { memo, FC } from "react";

import { useGetOpenPositions } from "../../../hooks/usegetOpenPositions";
import { ListItem } from "../../common/List/ListItem";
import { Title } from "../../common/Title/Title";

const OpenPositionsSectionComponent: FC = () => {
  const { data } = useGetOpenPositions();

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-black">
      <Title className={"text-white"} text={"nyitott pozíciók"} />
      {data?.map(service => {
        return (
          <ListItem
            key={service.attributes.title}
            dark={false}
            data={service.attributes.description}
            title={service.attributes.title}
            context="service"
          />
        );
      })}
    </section>
  );
};

export const OpenPositionsSection = memo(OpenPositionsSectionComponent);
