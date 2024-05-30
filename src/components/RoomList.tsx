import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Room } from "../../src/type";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const RoomList = ({ rooms }: { rooms: Room[] }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-col  md:grid md:mt-[7.7rem] md:grid-cols-4 gap-2">
        {rooms.map(({ rN, s, cS, floor }) => {
          console.log(floor);
          return <RoomCard key={rN} rN={rN} s={s} cS={cS} floor={floor} />;
        })}
      </div>
    </>
  );
};

const RoomCard = ({ rN, s, cS }: { rN: string; s: string; cS: string; floor: number }) => {
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
    <>
      <Sheet>
        <SheetTrigger className="z-0 md:z-30">
          <Card className="col-span-1 mt-[0.5rem] hover:bg-slate-100">
            <CardHeader className="gap-6">
              <span className={`bg-${bC} text-xl px-[0.6rem] rounded-full ml-[0.5rem]`}>{s}</span>
              <CardTitle>{rN}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{cS}</p>
            </CardContent>
          </Card>
        </SheetTrigger>
        <SheetContent side={"bottom"} className="w-full h-[10rem] md:h-[20rem]"></SheetContent>
      </Sheet>
    </>
  );
};
