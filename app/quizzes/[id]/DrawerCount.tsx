import * as React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from '@/components/ui/drawer';
import { Card } from '@/components/ui/card';

export default function DrawerCount({
  hours,
  seconds,
  minutes,
}: {
  hours: number;
  seconds: number;
  minutes: number;
}) {
  // const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="space-x-1" variant="outline">
            <div className=" flex ">
              <span suppressHydrationWarning className="text-sm font-normal ">
                {hours}
              </span>
              <span
                suppressHydrationWarning
                className="block text-sm text-gray-500"
              >
                h
              </span>
            </div>
            <div className=" flex    ">
              <span suppressHydrationWarning className="text-sm font-normal">
                {minutes}
              </span>
              <span
                suppressHydrationWarning
                className="block text-sm text-gray-500"
              >
                m
              </span>
            </div>
            <div className=" flex   ">
              <span suppressHydrationWarning className="text-sm font-normal">
                {seconds}
              </span>
              <span
                suppressHydrationWarning
                className="block text-sm text-gray-500"
              >
                s
              </span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Time Remaining</DialogTitle>
            <DialogDescription>
              Please complete the journey before the timer stops. Once the timer
              expires the journey will be marked as incomplete permanently.
            </DialogDescription>
          </DialogHeader>
          <Card
            className="flex justify-center space-x-4 p-4 shadow-2xl"
            suppressHydrationWarning
          >
            <div className="text-center">
              <span suppressHydrationWarning className="text-4xl font-bold">
                {hours}
              </span>
              <span
                suppressHydrationWarning
                className="block text-xl text-gray-500"
              >
                Hours
              </span>
            </div>
            <div className="text-center">
              <span suppressHydrationWarning className="text-4xl font-bold">
                {minutes}
              </span>
              <span
                suppressHydrationWarning
                className="block text-xl text-gray-500"
              >
                Minutes
              </span>
            </div>
            <div className="text-center">
              <span suppressHydrationWarning className="text-4xl font-bold">
                {seconds}
              </span>
              <span
                suppressHydrationWarning
                className="block text-xl text-gray-500"
              >
                Seconds
              </span>
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          suppressHydrationWarning
          className="space-x-1"
          variant="outline"
        >
          <div className=" flex ">
            <span suppressHydrationWarning className="text-sm font-normal ">
              {hours}
            </span>
            <span
              suppressHydrationWarning
              className="block text-sm text-gray-500"
            >
              h
            </span>
          </div>
          <div className=" flex    ">
            <span suppressHydrationWarning className="text-sm font-normal">
              {minutes}
            </span>
            <span
              suppressHydrationWarning
              className="block text-sm text-gray-500"
            >
              m
            </span>
          </div>
          <div className=" flex   ">
            <span suppressHydrationWarning className="text-sm font-normal">
              {seconds}
            </span>
            <span
              suppressHydrationWarning
              className="block text-sm text-gray-500"
            >
              s
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader className="text-left">
          <DrawerTitle>Time Remaining</DrawerTitle>
          <DrawerDescription>
            Please complete the journey before the timer stops. Once the timer
            expires the journey will be marked as incomplete permanently.
          </DrawerDescription>
        </DrawerHeader>
        <Card
          className="mx-4 flex justify-center space-x-4 p-4 shadow-2xl"
          suppressHydrationWarning
        >
          <div className="text-center">
            <span suppressHydrationWarning className="text-4xl font-bold">
              {hours}
            </span>
            <span
              suppressHydrationWarning
              className="block text-xl text-gray-500"
            >
              Hours
            </span>
          </div>
          <div className="text-center">
            <span suppressHydrationWarning className="text-4xl font-bold">
              {minutes}
            </span>
            <span
              suppressHydrationWarning
              className="block text-xl text-gray-500"
            >
              Minutes
            </span>
          </div>
          <div className="text-center">
            <span suppressHydrationWarning className="text-4xl font-bold">
              {seconds}
            </span>
            <span
              suppressHydrationWarning
              className="block text-xl text-gray-500"
            >
              Seconds
            </span>
          </div>
        </Card>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Got it</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
