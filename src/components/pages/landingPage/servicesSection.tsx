import { memo, FC, useState, useCallback, MouseEvent, useMemo } from "react";

import { ListItem } from "../../common/List/ListItem";
import { Title } from "../../common/Title/Title";

const ServicesSectionComponent: FC = () => {
  const servicesList = useMemo(
    () => [
      {
        title: "Márkafejlesztés",
        data: " — Amikor márkát építünk, célunk, hogy definiáljuk és kifejezzük azt a jelentőségteljes különbséget, ami a vállalat hosszútávú sikerének az alapja.",
      },
      {
        title: "Arculatfejlesztés",
        data: " — Ügyfeleink arculatát a legújabb trendeket és piaci kihívásokat szem előtt tartva fejlesztjük, minden részletre odafigyelve.",
      },
      {
        title: "Kampányfejlesztés",
        data: " — A komplex integrált kampányoktól kezdve az egycsatornás taktikai kampányokig minden feladat egyformán fontos számunkra",
      },
      {
        title: "Filmgyártás",
        data: " — Ma a marketingkommunikáció egyik leghatékonyabb eszköze a film, és a videó. Mi kihozzuk minden témából a maximumot: hisszük, hogy tartalom és a minőség egymást erősítve egyaránt fontos valamennyi produkciónál.",
      },
      {
        title: "Webfejlesztés",
        data: " — A teljeskörű website-fejlesztés a megfelelő stratégia kidolgozásával kezdődik, akár egy egyszerű microsite-ról, akár egy corporate weboldalról van szó.",
      },
      {
        title: "Social media tanácsadás és management",
        data: " — A marketing- és a kommunikációs stratégiával összehangolt social media megoldásokat készítünk.",
      },
      {
        title: "PR tanácsadás és management",
        data: " — A marketing- és kommunikációs startégia mentén széles körű PR-megoldásokat dolgozunk ki.",
      },
      {
        title: "Médiatervezés és médiavásárlás",
        data: " — A médiastratégiát, a –tervezést, illetve –vásárlást az üzleti- és marketingcélokra építve dolgozzuk ki.",
      },
      {
        title:
          "Általános marketing tanácsadás, vállalatfejlesztés és üzletviteli tanácsadás",
        data: " — Általános marketingtanácsadás, illetve vállalatfejlesztés és üzletviteli tanácsadás keretében a partnerünk működésének optimalizálására és növekedési lehetőségeire készítünk javaslatot.",
      },
    ],
    [],
  );

  const [selectedSection, setSelectedSection] = useState(servicesList[0].title);

  const handleServiceItemClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setSelectedSection(e.currentTarget.value);
    },
    [],
  );

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-white">
      <Title className={"text-black"} text={"szolgáltatások"} />
      {servicesList.map(service => {
        return (
          <ListItem
            key={service.title}
            active={selectedSection === service.title}
            data={service.data}
            title={service.title}
            onClick={handleServiceItemClick}
          />
        );
      })}
    </section>
  );
};

export const ServicesSection = memo(ServicesSectionComponent);
