import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StayRoomList } from "@/components/StayRoomList";

export default function Home() {
  return (
    <main className="">
      <div className="flex min-h-[100vh] max-w-full">
        <div className="hidden md:block">
          <div className="bg-red-200 fixed top-0 left-0 h-full w-[300px] items-center justify-center p-6">
            <p>dddd</p>
            <p>dddd</p>
            <p>dddd</p>
            <p>dddd</p>
            <p>dddd</p>
            <p>dddd</p>
          </div>
        </div>
        <div className="w-full m-[1rem] md:ml-[300px]">
          <div className="flex h-full justify-center">
            <Tabs defaultValue="stay" className="w-[400px] md:w-full m-[1rem]">
              <TabsList>
                <TabsTrigger value="stay">stay</TabsTrigger>
                <TabsTrigger value="out">out</TabsTrigger>
              </TabsList>
              <TabsContent value="stay">
                <StayRoomList />
              </TabsContent>
              <TabsContent value="out">Change your out here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
