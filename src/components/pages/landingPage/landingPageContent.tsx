import { GridItem, Grid } from "@chakra-ui/react";
import Image from "next/image";
import { memo, FC } from "react";

const LandingPageContentComponent: FC = () => {
  return (
    <section className="flex flex-col justify-start items-start w-full h-auto px-8">
      <div className="flex">
        <span className="text-white w-2/3 text-[1.75rem] py-6">
          {
            "Az ügyfeleknek valójában nem egyszerűen a brief alapján készülő kreatívokra, hanem üzleti problémájuk megoldására van szükségük — ezért mi kreatív, személyre szabott kommunikációs és üzletviteli megoldásokat nyújtunk számukra."
          }
        </span>
      </div>

      <span className="uppercase text-text-gray-light pt-14 pb-8">
        {"Projektek"}
      </span>
      <Grid
        className="w-full min-h-screen h-max pb-8"
        gap={12}
        templateColumns="repeat(7, 1fr)"
        templateRows={"repeat(22, 9.75vh)"}
      >
        <GridItem colEnd={5} colStart={1} rowEnd={6} rowStart={1}>
          <div className="w-full h-full relative">
            <Image
              className="object-cover w-full h-auto rounded-xl"
              layout={"fill"}
              src="/images/projects/epkar.gif"
            />
          </div>
        </GridItem>
        <GridItem colEnd={8} colStart={5} rowEnd={5} rowStart={1}>
          <div className="w-full h-[85%] relative">
            <Image
              className="object-cover w-full h-auto rounded-xl"
              layout={"fill"}
              src="/images/projects/gallio.gif"
            />
          </div>
        </GridItem>
        <GridItem colSpan={7} rowEnd={15} rowStart={6}>
          <div className="w-full h-full relative">
            <Image
              className="object-cover w-full h-auto rounded-xl"
              layout={"fill"}
              src="/images/projects/ds.gif"
            />
          </div>
        </GridItem>
        <GridItem colEnd={4} colStart={1} rowEnd={22} rowStart={17}>
          <div className="w-full h-[100%] relative">
            <Image
              className="object-cover w-full h-auto rounded-xl"
              layout={"fill"}
              src="/images/projects/mkb-lakasfelujitas.gif"
            />
          </div>
        </GridItem>
        <GridItem colEnd={8} colStart={4} rowEnd={22} rowStart={15}>
          <div className="w-full h-full relative">
            <Image
              className="object-cover w-full h-auto rounded-xl"
              layout={"fill"}
              src="/images/projects/ikea-demo.gif"
            />
          </div>
        </GridItem>
      </Grid>
    </section>
  );
};

export const LandingPageContent = memo(LandingPageContentComponent);
