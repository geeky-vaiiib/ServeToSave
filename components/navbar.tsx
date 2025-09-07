"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Leaf, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Donate Food",
      path: "/donate",
    },
    {
      name: "Request Food",
      path: "/request",
    },
    {
      name: "Map",
      path: "/map",
    },
    {
      name: "About",
      path: "/about",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">Serve To Save India</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.path}
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                pathname === route.path ? "text-green-600" : "text-foreground/60"
              }`}
            >
              {route.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Solutions <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/for-ngos">For NGOs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/for-restaurants">For Restaurants</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/for-corporates">For Corporates</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/partnerships">Partnership Programs</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/login" passHref>
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </Link>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold">Serve To Save India</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.path}
                    className={`text-sm font-medium transition-colors hover:text-green-600 ${
                      pathname === route.path ? "text-green-600" : "text-foreground/60"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="py-4">
                  <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Solutions</p>
                  <div className="grid gap-2">
                    <Link
                      href="/for-ngos"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium transition-colors hover:text-green-600"
                    >
                      For NGOs
                    </Link>
                    <Link
                      href="/for-restaurants"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium transition-colors hover:text-green-600"
                    >
                      For Restaurants
                    </Link>
                    <Link
                      href="/for-corporates"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium transition-colors hover:text-green-600"
                    >
                      For Corporates
                    </Link>
                    <Link
                      href="/partnerships"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium transition-colors hover:text-green-600"
                    >
                      Partnership Programs
                    </Link>
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-2">
                <Link href="/login" passHref onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" passHref onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
