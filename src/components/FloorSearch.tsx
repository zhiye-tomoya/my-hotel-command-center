"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const FloorSearch = () => {
  const [floor, setFloor] = useState("all");

  return (
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
  );
};
