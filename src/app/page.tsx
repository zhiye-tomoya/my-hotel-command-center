"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StayRoomList } from "@/components/StayRoomList";
import { RoomList } from "@/components/RoomList";
import { OutRoomList } from "@/components/OutRoomList";
import { DRoomList } from "@/components/DRoomList";
import { VRoomList } from "@/components/VRoomList";
import { useEffect } from "react";
import { Room } from "../../src/type";

export default function Home() {
  const roomsData: Room[] = [
    { rN: "101", s: "stay", cS: "onGoing", floor: 1 },
    { rN: "103", s: "out", cS: "done", floor: 1 },
    { rN: "106", s: "out", cS: "checked", floor: 1 },
    { rN: "201", s: "depature", cS: "toDo", floor: 2 },
    { rN: "202", s: "depature", cS: "onGoing", floor: 2 },
    { rN: "203", s: "vacant", cS: "onGoing", floor: 2 },
    { rN: "204", s: "vacant", cS: "toDo", floor: 2 },
    { rN: "206", s: "out", cS: "done", floor: 2 },
    { rN: "301", s: "stay", cS: "onGoing", floor: 3 },
    { rN: "305", s: "stay", cS: "toDo", floor: 3 },
    { rN: "308", s: "stay", cS: "checked", floor: 3 },
    { rN: "309", s: "vacant", cS: "checked", floor: 3 },
  ];

  const stayRoomsData = roomsData.filter((room) => room.s === "stay");
  const outRoomsData = roomsData.filter((room) => room.s === "out");
  const dRoomsData = roomsData.filter((room) => room.s === "depature");
  const vRoomsData = roomsData.filter((room) => room.s === "vacant");

  const [rooms, setRooms] = useState<Room[]>([]);
  const [stayRooms, setStayRooms] = useState<Room[]>([]);
  const [outRooms, setOutRooms] = useState<Room[]>([]);
  const [dRooms, setDRooms] = useState<Room[]>([]);
  const [vRooms, setVRooms] = useState<Room[]>([]);

  const [floor, setFloor] = useState("all");
  useEffect(() => {
    const handleRoomData = () => {
      if (floor !== "all") {
        setRooms(roomsData.filter((room) => room.floor === Number(floor)));
        setStayRooms(stayRoomsData.filter((room) => room.floor === Number(floor)));
        setOutRooms(outRoomsData.filter((room) => room.floor === Number(floor)));
        setDRooms(dRoomsData.filter((room) => room.floor === Number(floor)));
        setVRooms(vRoomsData.filter((room) => room.floor === Number(floor)));
      } else {
        setRooms(roomsData);
        setStayRooms(stayRoomsData);
        setOutRooms(outRoomsData);
        setDRooms(dRoomsData);
        setVRooms(vRoomsData);
      }
    };

    handleRoomData();
  }, [floor]);

  return (
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
            <RoomList rooms={rooms} />
          </TabsContent>
          <TabsContent value="stay">
            <StayRoomList rooms={stayRooms} />
          </TabsContent>
          <TabsContent value="out">
            <OutRoomList rooms={outRooms} />
          </TabsContent>
          <TabsContent value="depature">
            <DRoomList rooms={dRooms} />
          </TabsContent>
          <TabsContent value="vacant">
            <VRoomList rooms={vRooms} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-full md:w-[400px] fixed bottom-1 md:top-5">
        <div className="flex justify-center mx-[1rem]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full">
              <Button variant="outline">{floor === "all" ? "All" : `${floor} F`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={floor} onValueChange={setFloor}>
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
