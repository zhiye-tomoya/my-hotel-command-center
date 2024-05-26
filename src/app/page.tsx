import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StayRoomList } from "@/components/StayRoomList";
import { SideMenu } from "@/components/SideMenu";
import { FloorSearch } from "@/components/FloorSearch";
import { RoomList } from "@/components/RoomList";
import { OutRoomList } from "@/components/OutRoomList";
import { DRoomList } from "@/components/DRoomList";
import { VRoomList } from "@/components/VRoomList";

export default function Home() {
  return (
    <main className="flex min-h-[100vh] max-w-full">
      <div className="hidden md:block">
        <SideMenu />
      </div>
      <div className="w-full md:ml-[300px]">
        <div className="flex h-full justify-center">
          <Tabs defaultValue="all" className="flex flex-col md:flex-col w-full mx-[1rem]">
            <TabsList className="z-10 fixed bottom-[50px] md:top-20">
              <TabsTrigger className="text-slate-300" value="stay">
                Stay<span className="bg-green-500 p-[0.4rem] rounded-full ml-[0.5rem]"></span>
              </TabsTrigger>
              <TabsTrigger className="text-slate-300" value="out">
                Out<span className="bg-orange-500 p-[0.4rem] rounded-full ml-[0.5rem]"></span>
              </TabsTrigger>
              <TabsTrigger className="text-slate-300" value="all">
                All<span className="bg-black p-[0.4rem] rounded-full ml-[0.5rem]"></span>
              </TabsTrigger>
              <TabsTrigger className="text-slate-300" value="depature">
                D<span className="bg-blue-500 p-[0.4rem] rounded-full ml-[0.5rem]"></span>
              </TabsTrigger>
              <TabsTrigger className="text-slate-300" value="vacant">
                V<span className="bg-white p-[0.4rem] border-2 border-slate-700 rounded-full ml-[0.5rem]"></span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <RoomList />
            </TabsContent>
            <TabsContent value="stay">
              <StayRoomList />
            </TabsContent>
            <TabsContent value="out">
              <OutRoomList />
            </TabsContent>
            <TabsContent value="depature">
              <DRoomList />
            </TabsContent>
            <TabsContent value="vacant">
              <VRoomList />
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-full md:w-[400px] fixed bottom-1 md:top-5">
          <div className="flex justify-center mx-[1rem]">
            <FloorSearch />
          </div>
        </div>
      </div>
    </main>
  );
}
