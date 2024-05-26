import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Pagination } from "./Pagination";
import { FloorSearch } from "./FloorSearch";
export const StayRoomList = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-col  md:grid md:mt-[4.5rem] md:grid-cols-4 gap-2">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
      {/* <Pagination /> */}
    </>
  );
};

const RoomCard = () => {
  return (
    <Card className="col-span-1 mt-[0.5rem]">
      <CardHeader>
        <CardTitle>Room Num</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
