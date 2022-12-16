import { memo, FC } from "react";

import { useGetServices } from "../../../hooks/useGetServices";
import { ListItem } from "../../common/List/ListItem";
import { Title } from "../../common/Title/Title";

const ServicesSectionComponent: FC = () => {
  const { data } = useGetServices();

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-white">
      <Title className={"text-black"} text={"szolgáltatások"} />
      {data?.map(service => {
        return (
          <ListItem
            key={service.attributes.title}
            data={service.attributes.description}
            title={service.attributes.title}
            context="service"
          />
        );
      })}
    </section>
  );
};

export const ServicesSection = memo(ServicesSectionComponent);
