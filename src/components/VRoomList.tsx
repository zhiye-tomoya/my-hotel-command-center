"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Pagination } from "./Pagination";
import { FloorSearch } from "./FloorSearch";
export const VRoomList = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-col  md:grid md:mt-[7.7rem] md:grid-cols-4 gap-2">
        <RoomCard rN={"101"} s={"stay"} cS={"onGoing"} />
        <RoomCard rN={"103"} s={"out"} cS={"done"} />
        <RoomCard rN={"106"} s={"out"} cS={"checked"} />
        <RoomCard rN={"201"} s={"depature"} cS={"toDo"} />
        <RoomCard rN={"202"} s={"depature"} cS={"onGoing"} />
        <RoomCard rN={"203"} s={"vacant"} cS={"onGoing"} />
        <RoomCard rN={"204"} s={"vacant"} cS={"toDo"} />
        <RoomCard rN={"206"} s={"out"} cS={"done"} />
        <RoomCard rN={"301"} s={"stay"} cS={"onGoing"} />
        <RoomCard rN={"305"} s={"stay"} cS={"toDo"} />
        <RoomCard rN={"308"} s={"stay"} cS={"checked"} />
      </div>
      {/* <Pagination /> */}
    </>
  );
};

const RoomCard = ({ rN, s, cS }: { rN: string; s: string; cS: string }) => {
  useEffect(() => {
    switch (s) {
      case "stay":
        setBG("green-500");
        break;
      case "out":
        setBG("orange-500");
        break;
      case "depature":
        setBG("blue-500");
        break;
      case "vacant":
        setBG("white border border-slate-700");
        break;

      default:
        break;
    }
  }, []);
  const [bC, setBG] = useState("");

  return (
    <Card className={`${s !== "vacant" && "hidden"} relative col-span-1 mt-[0.5rem]`}>
      <span className={`relative top-2 left-[15rem] bg-${bC} px-[0.6rem] rounded-full ml-[0.5rem]`}></span>
      <CardHeader>
        <CardTitle>{rN}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{cS}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};
