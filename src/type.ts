export type RoomStatus = "stay" | "out" | "depature" | "vacant";
export type CheckinStatus = "onGoing" | "done" | "checked" | "toDo";

export type Room = {
  rN: string;
  s: RoomStatus;
  cS: CheckinStatus;
  floor: number;
};
