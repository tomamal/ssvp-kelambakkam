"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Logo, MobileLogo } from "./logo";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about-us" },
  { label: "Events", url: "/events" },
  { label: "Contact us", url: "/contact-us" },
];

type NavItem = (typeof navItems)[0];

export function Navbar() {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
}

function DesktopNavbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(window.screenY);

  return (
    <div
      className={cn(
        "hidden sm:block w-full z-20 transition-all duration-300 bg-white shadow-md",
        navbar && "fixed top-0 left-0"
      )}
    >
      <MaxWidthWrapper className="flex justify-between items-center shadow-sm">
        <Logo />
        <div className="flex items-center">
          <div className="flex items-center divide-x-2 divide-solid divide-neutral-400">
            {navItems.map((item: NavItem) => (
              <Navbaritem key={item.url} link={item.url} label={item.label} />
            ))}
          </div>
          <Button variant={"custom"} size={"custom"}>
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background block sm:hidden py-4 px-2">
      <nav className="flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side={"left"}>
            <MobileLogo />
            <div className="flex flex-col gap-1 pt-4">
              {navItems.map((item: NavItem) => (
                <Navbaritem
                  key={item.url}
                  link={item.url}
                  label={item.label}
                  onClick={() => setIsOpen((open) => !open)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant={"default"}
            className="bg-red-500 text-lg font-medium text-white"
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}

interface Props {
  link: string;
  label: string;
  onClick?: () => void;
}
function Navbaritem({ link, label, onClick }: Props) {
  const pathname = usePathname();
  const activeLink = pathname === link;
  return (
    <div className="relative flex items-center px-4">
      <div>
        <Link
          href={link}
          className={cn(
            "w-full justify-start text-sm text-muted-foreground hover:text-foreground ",
            activeLink && "text-foreground"
          )}
          onClick={onClick}
        >
          {label}
        </Link>
        {activeLink && (
          <div className="hidden md:block absolute  w-[80%] left-1/2 h-[2px] bg-gray-400 -translate-x-1/2 rounded-xl " />
        )}
      </div>
    </div>
  );
}
