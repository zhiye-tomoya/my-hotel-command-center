import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Room } from "../../src/type";

export const VRoomList = ({ rooms }: { rooms: Room[] }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-col  md:grid md:mt-[7.7rem] md:grid-cols-4 gap-2">
        {rooms.map(({ rN, s, cS, floor }) => {
          return <RoomCard key={rN} rN={rN} s={s} cS={cS} />;
        })}
      </div>
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
    <Card className="relative col-span-1 mt-[0.5rem]">
      <span className={`relative top-2 left-[18.7rem] md:left-[15rem] bg-${bC} px-[0.6rem] rounded-full ml-[0.5rem]`}></span>
      <CardHeader>
        <CardTitle>{rN}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{cS}</p>
      </CardContent>
    </Card>
  );
};
