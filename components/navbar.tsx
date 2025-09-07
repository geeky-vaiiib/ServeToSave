"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, Leaf, ChevronDown, Sun, Moon, User, LogOut, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/lib/auth-context"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  // Base routes available to all users
  const baseRoutes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Map",
      path: "/map",
    },
    {
      name: "Impact",
      path: "/impact",
    },
    {
      name: "Logistics",
      path: "/logistics",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]

  // Role-specific routes
  const getRoutes = () => {
    if (!user) return baseRoutes

    const routes = [...baseRoutes]

    if (user.role === 'donor' || user.role === 'admin') {
      routes.splice(1, 0, {
        name: "Donate Food",
        path: "/donate",
      })
    }

    if (user.role === 'ngo' || user.role === 'admin') {
      routes.splice(user.role === 'admin' ? 2 : 1, 0, {
        name: "Request Food",
        path: "/request",
      })
    }

    return routes
  }

  const routes = getRoutes()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Serve To Save India" className="h-8 w-8" />
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <User className="h-4 w-4" />
                  {user.firstName}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="flex items-center gap-2 text-red-600">
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login" passHref>
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup" passHref>
                <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
              </Link>
            </>
          )}
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
                <img src="/logo.svg" alt="Serve To Save India" className="h-8 w-8" />
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
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                    setIsMenuOpen(false)
                  }}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-2">Toggle theme</span>
                </Button>

                {user ? (
                  <>
                    <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full text-red-600 border-red-600 hover:bg-red-50"
                      onClick={() => {
                        logout()
                        setIsMenuOpen(false)
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
