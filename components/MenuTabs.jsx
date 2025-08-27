import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DishCard from "./DishCard";
import Filter from "./Filter";

export function MenuTabs() {
  return (
    <div className="flex w-full flex-col gap-6 items-center">
      <Tabs defaultValue="content_1">
        <TabsList className={"w-4xl"}>
          <TabsTrigger value="content_1">Content 1</TabsTrigger>
          <TabsTrigger value="content_2">Content 2</TabsTrigger>
        </TabsList>
        <TabsContent value="content_1" className={"w-fit flex gap-8"}>
          <div className="grid grid-cols-3 gap-6">
            <DishCard
              name={"Umbengo"}
              description={"Very nice braaied meat"}
              src={"/braaipic.jpeg"}
              price={"R150"}
              buttonLabel={"+ Add to cart"}
              key={1}
            />
            <DishCard
              name={"Umbengo"}
              description={"Very nice braaied meat"}
              src={"/braaipic.jpeg"}
              price={"R150"}
              buttonLabel={"+ Add to cart"}
              key={2}
            />
            <DishCard
              name={"Umbengo"}
              description={"Very nice braaied meat"}
              src={"/braaipic.jpeg"}
              price={"R150"}
              buttonLabel={"+ Add to cart"}
              key={3}
            />
          </div>
          <Filter />
        </TabsContent>
        <TabsContent value="content_2">
          <p className="flex justify-center">Tabs content 2</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
