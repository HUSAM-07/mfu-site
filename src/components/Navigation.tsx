"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Mohammed Faiyazuddin</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link 
            href="/profile"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/profile" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Profile
          </Link>
          <Link 
            href="/work"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/work" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Work
          </Link>
          <Link 
            href="/recognition"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/recognition" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Recognition
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2">
              Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/work">Work</Link>
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
