import { memo, FC, useState, useCallback, MouseEvent } from "react";

import { ServiceItem } from "../../common/Services/ServicesItem";
import { Title } from "../../common/Title/Title";

const ServicesSectionComponent: FC = () => {
  const [selectedSection, setSelectedSection] = useState("Márkafejlesztés");

  const handleServiceItemClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setSelectedSection(e.currentTarget.value);
    },
    [],
  );

  return (
    <section className="flex flex-col justify-start items-center w-full h-auto md:px-8 px-2 pb-20 bg-white">
      <Title className={"text-black"} text={"szolgáltatások"} />
      <ServiceItem
        active={selectedSection === "Márkafejlesztés"}
        data=" — Amikor márkát építünk, célunk, hogy definiáljuk és kifejezzük azt a jelentőségteljes különbséget, ami a vállalat hosszútávú sikerének az alapja."
        title="Márkafejlesztés"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Arculatfejlesztés"}
        data=" — Ügyfeleink arculatát a legújabb trendeket és piaci kihívásokat szem előtt tartva fejlesztjük, minden részletre odafigyelve."
        title="Arculatfejlesztés"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Kampányfejlesztés"}
        data=" – A komplex integrált kampányoktól kezdve az egycsatornás taktikai kampányokig minden feladat egyformán fontos számunkra"
        title="Kampányfejlesztés"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Filmgyártás"}
        data=" – Ma a marketingkommunikáció egyik leghatékonyabb eszköze a film, és a videó. Mi kihozzuk minden témából a maximumot: hisszük, hogy tartalom és a minőség egymást erősítve egyaránt fontos valamennyi produkciónál."
        title="Filmgyártás"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Webfejlesztés"}
        data=" – A teljeskörű website-fejlesztés a megfelelő stratégia kidolgozásával kezdődik, akár egy egyszerű microsite-ról, akár egy corporate weboldalról van szó."
        title="Webfejlesztés"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Social media tanácsadás és management"}
        data=" – A marketing- és a kommunikációs stratégiával összehangolt social media megoldásokat készítünk."
        title="Social media tanácsadás és management"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "PR tanácsadás és management"}
        data=" – A marketing- és kommunikációs startégia mentén széles körű PR-megoldásokat dolgozunk ki."
        title="PR tanácsadás és management"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={selectedSection === "Médiatervezés és médiavásárlás"}
        data=" – A médiastratégiát, a –tervezést, illetve –vásárlást az üzleti- és marketingcélokra építve dolgozzuk ki."
        title="Médiatervezés és médiavásárlás"
        onClick={handleServiceItemClick}
      />
      <ServiceItem
        active={
          selectedSection ===
          "Általános marketing tanácsadás, vállalatfejlesztés és üzletviteli tanácsadás"
        }
        data=" – Általános marketingtanácsadás, illetve vállalatfejlesztés és üzletviteli tanácsadás keretében a partnerünk működésének optimalizálására és növekedési lehetőségeire készítünk javaslatot."
        title="Általános marketing tanácsadás, vállalatfejlesztés és üzletviteli tanácsadás"
        onClick={handleServiceItemClick}
      />
    </section>
  );
};

export const ServicesSection = memo(ServicesSectionComponent);
