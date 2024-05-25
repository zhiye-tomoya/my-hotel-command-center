import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="m-[1rem]">
      <Tabs defaultValue="stay" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="stay">stay</TabsTrigger>
          <TabsTrigger value="out">out</TabsTrigger>
        </TabsList>
        <TabsContent value="stay">Make changes to your account here.</TabsContent>
        <TabsContent value="out">Change your out here.</TabsContent>
      </Tabs>
    </main>
  );
}
