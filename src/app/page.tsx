import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StayRoomList } from "@/components/StayRoomList";
import Link from "next/link";
import { SideMenu } from "@/components/SideMenu";
import { FloorSearch } from "@/components/FloorSearch";

export default function Home() {
  return (
    <main className="flex min-h-[100vh] max-w-full">
      <div className="hidden md:block">
        <SideMenu />
      </div>
      <div className="w-full md:ml-[300px]">
        <div className="flex h-full justify-center">
          <Tabs defaultValue="all" className="flex flex-col md:flex-col w-[400px] md:w-full mx-[1rem]">
            <TabsList className="fixed bottom-[50px] md:top-10">
              {/* <TabsTrigger value="all">All</TabsTrigger> */}
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
            <TabsContent value="all">
              <StayRoomList />
            </TabsContent>
            <TabsContent value="stay">
              <StayRoomList />
            </TabsContent>
            <TabsContent value="out">Change your out here.</TabsContent>
          </Tabs>
        </div>
        <div className="w-full fixed bottom-1 md:top-0">
          <div className="flex justify-center mx-[1rem]">
            <FloorSearch />
          </div>
        </div>
      </div>
    </main>
  );
}
