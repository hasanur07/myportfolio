import { Tabs, Tab } from "@heroui/tabs";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02FreeIcons } from "@hugeicons/core-free-icons"
import { Button } from "@heroui/button";

export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="2xl" position="sticky" className="sm:px-16">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <p className="flex text-inherit text-xl gap-0.5">Hasanur Mondal<span className="text-red-600 text-xl font-bold">.</span></p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Tabs aria-label="Options" radius="full">
            <Tab key="Home" title="Home"></Tab>
            <Tab key="p" title="Project"></Tab>
            <Tab key="a" title="About"></Tab>
          </Tabs>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <Button variant="bordered" radius="full" color="default" className="pr-1.5 border-white" onPress={()=>window.location.href="https://wa.me/9051713742"}>
          Contact Me
          <div className="bg-white rounded-full flex justify-center items-center w-14 h-7">
            <HugeiconsIcon
              icon={ArrowRight02FreeIcons}
              size={32}
              color="black"
            />
          </div>
        </Button>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link
              color="success"
              href="#"
              size="lg"
            >
              HOME
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#"
              size="lg"
            >
              PROJECTS
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#"
              size="lg"
            >
              ABOUT
            </Link>
          </NavbarMenuItem>
        </div>
        <Button variant="bordered" radius="full" color="default" className="pr-1.5 border-white mt-auto mb-6 w-40">
          Contact Me
          <div className="bg-white rounded-full flex justify-center items-center w-14 h-7">
            <HugeiconsIcon
              icon={ArrowRight02FreeIcons}
              size={32}
              color="black"
            />
          </div>
        </Button>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
