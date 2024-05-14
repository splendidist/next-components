"use client";
import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import "./Popover.css";

export default function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">
        Show more info...
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          More info
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
