import MyCard from "@/components/Card";
import Example from "@/components/Example";
import { MyCarousel } from "@/components/MyCarousel";
import { TypographyH1 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Example />
      <section className="w-full flex flex-col space-y-8 items-center">
        <TypographyH1
          msg="How it works? "
          className={"text-gray-900 text-center "}
        />
        <MyCarousel />
      </section>
    </>
  );
}
