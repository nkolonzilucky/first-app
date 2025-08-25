import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MenuTabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 items-center">
      <Tabs defaultValue="content_1">
        <TabsList>
          <TabsTrigger value="content_1">Content 1</TabsTrigger>
          <TabsTrigger value="content_2">Content 2</TabsTrigger>
        </TabsList>
        <TabsContent value="content_1">
          <p>Tab content 1</p>
        </TabsContent>
        <TabsContent value="content_2">
          <p>Tabs content 2</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
