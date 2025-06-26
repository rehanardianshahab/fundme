"use client";

import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Drawer,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import TextHeading from "./TextHeading";

interface Menu {
  id: string;
  label: string;
  path: string;
}

interface MenuNavProps {
  data: Menu[];
}

export default function Navbar() {
  const menus: Menu[] = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "discover-project",
      label: "Discover Project",
      path: "/dp",
    },
    {
      id: "about-us",
      label: "About Us",
      path: "/au",
    },
  ];

  return (
    <>
      <div className="@container/main fixed w-full bg-white z-50 shadow">
        <div className="flex items-center @3xl/main:justify-between justify-center w-full py-10 container-main-x">
          <div>
            <p className="text-2xl font-semibold text-[#3A3A3C]">FUNDME</p>
          </div>
          <MenuNav data={menus} />
        </div>
      </div>
      <MenuMobile data={menus} />
    </>
  );
}

function MenuMobile({ data }: MenuNavProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <div className="@container/main">
      <div className="@4xl/main:hidden block">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <div className="fixed right-10 bottom-10 z-50">
              <Button size="icon">
                <Menu />
              </Button>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                <TextHeading text={{ label: "FUNDME" }} />
              </DrawerTitle>
              <DrawerDescription asChild>
                <div className="flex flex-col gap-4 text-right">
                  {data.map((_: Menu, key: number) => (
                    <div key={key}>
                      <Link
                        href={_.path}
                        className={cn(
                          "py-2",
                          pathname == _.path
                            ? "hover:text-secondary text-primary font-semibold"
                            : "hover:text-primary text-secondary font-semibold"
                        )}
                      >
                        {_.label}
                      </Link>
                      {pathname == _.path ? (
                        <div className="border-2 rounded-lg border-primary w-6 ml-auto" />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <ButtonLogin closeDialog={() => setOpen(false)} />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

function MenuNav({ data }: MenuNavProps) {
  const pathname = usePathname();
  return (
    <>
      <div className="@4xl/main:flex hidden gap-[56px] items-center">
        {data.map((_: Menu, key: number) => (
          <div key={key}>
            <div className="py-2">
              <Link
                href={_.path}
                className={cn(
                  pathname == _.path
                    ? "hover:text-secondary text-primary font-semibold"
                    : "hover:text-primary text-secondary font-semibold"
                )}
              >
                {_.label}
              </Link>
            </div>
            {pathname == _.path ? (
              <div className="border-2 rounded-lg border-primary w-3 mx-auto" />
            ) : (
              ""
            )}
          </div>
        ))}
        <div>
          <ButtonLogin />
        </div>
      </div>
    </>
  );
}

function ButtonLogin({ closeDialog }: { closeDialog?: () => void }) {
  return (
    <Link href="/login">
      <Button className="w-full" onClick={closeDialog}>
        Get Started
      </Button>
    </Link>
  );
}
