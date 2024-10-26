"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="w-full">
      <div className="container flex h-14 items-center">
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={pathname === "/" ? "text-primary" : "text-muted-foreground"}>
            Home
          </Link>
          <Link href="/work" className={pathname === "/work" ? "text-primary" : "text-muted-foreground"}>
            Work
          </Link>
          <Link href="/profile" className={pathname === "/profile" ? "text-primary" : "text-muted-foreground"}>
            Profile
          </Link>
          <Link href="/recognition" className={pathname === "/recognition" ? "text-primary" : "text-muted-foreground"}>
            Recognition
          </Link>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/work">Work</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/recognition">Recognition</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
