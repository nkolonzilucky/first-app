import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import React from 'react'

export default function MyCard({step, sub_title, instruction, image}) {
  return (
    <Card className={" max-w-sm"}>
      <CardHeader>
        <div className="text-center">
          <CardTitle>Step {step}</CardTitle>
          <CardDescription className={"max-h-6"}>{sub_title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className={"flex flex-col items-center min-w-full"}>
        <Image
          src={image}
          width={200}
          height={300}
          alt="Steps"
          className="max-w-fit max-h-fit"
        />
        <p className="min-w-sm">{instruction}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
