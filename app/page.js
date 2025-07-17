import MyCard from "@/components/Card";
import { MyCarousel } from "@/components/MyCarousel";
import { TypographyH1 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-max items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl gap-[32px] row-start-2 items-center sm:items-start">
        <section className="flex gap-9 mb-8 p-8">
          <Image
            src="https://dummyjson.com/image/300x200/"
            alt="Hero background"
            width={600}
            height={400}
            className="order-1 size-max"
          />
          <div className="flex flex-col gap-8 justify-between px-2">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-black text-4xl font-bold">
                Are you craving umbengo?
              </h1>
              <h6 className="text-gray-500 text-xl font-semibold">
                Your first piece is on us.
              </h6>
            </div>
            <Button className="w-full">Claim your free piece</Button>
          </div>
        </section>
        <section className="flex flex-col items-center max-w-4xl">
          <TypographyH1 msg="How it works? " />
          <MyCarousel />
        </section>
      </main>
    </div>
  );
}
