import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Pagination } from "./Pagination";
import { FloorSearch } from "./FloorSearch";
export const StayRoomList = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 mr-[1rem]">
        <div className="md:col-span-4">
          <FloorSearch />
        </div>
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
        <CardTitle>Stay Card Title</CardTitle>
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
