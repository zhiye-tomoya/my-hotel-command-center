import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StayRoomList } from "@/components/StayRoomList";
import Link from "next/link";
import { SideMenu } from "@/components/SideMenu";

export default function Home() {
  return (
    <main className="">
      <div className="flex min-h-[100vh] max-w-full">
        <div className="hidden md:block">
          <SideMenu />
        </div>
        <div className="w-full md:ml-[300px]">
          <div className="flex h-full justify-center">
            <Tabs defaultValue="stay" className="w-[400px] md:w-full m-[1rem]">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="stay">
                  Stay<span className="bg-green-500 p-[0.4rem] rounded-full ml-[0.5rem]"></span>
                </TabsTrigger>
                <TabsTrigger value="out">
                  Out<span className="bg-orange-500 p-[0.4rem] rounded-full ml-[0.5rem]"></span>
                </TabsTrigger>
                <TabsTrigger value="depature">
                  Depature<span className="bg-blue-500 p-[0.4rem] rounded-full ml-[0.5rem]"></span>
                </TabsTrigger>
                <TabsTrigger value="vacant">
                  Vacant<span className="bg-green-500 p-[0.4rem] rounded-full ml-[0.5rem]"></span>
                </TabsTrigger>
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
