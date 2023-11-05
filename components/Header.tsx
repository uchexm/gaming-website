/* eslint-disable react/jsx-key */
import Link from "next/link";
import Container from "./ui/container";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "PRODUCTS",
  },
  {
    href: "/",
    label: "APP & GAMES",
  },
  {
    href: "/",
    label: "FEATURES",
  },
  {
    href: "/",
    label: "SUPPORT",
  },
  {
    href: "/",
    label: "ABOUT",
  },
];

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center justify-between">
            {" "}
            {/* Use justify-between to move the menu icon to the right */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Vector.svg"
                alt="logo"
                width={45.751}
                height={34.858}
              />
              <h1 id="board" className="ml-4 text-xl font-bold">
                board
              </h1>
            </Link>
            <Sheet>
              <SheetTrigger>
                <Menu className="mobile-menu h-12 md:hidden w-12" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      style={{ color: "black" }}
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping-bag"
            >
              <span>
                <Image
                  src="/images/bag-icon.svg"
                  alt="bag"
                  width={45.751}
                  height={34.858}
                />
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
