"use client"

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background">
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Mohammed Faiyazuddin</h2>
            <p className="text-muted-foreground">MEP Contractor & General Manager</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center"
            onClick={handleScrollToTop}
          >
            Back to top
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="flex gap-4 mb-4 md:mb-0">
            <Link href="/profile" className="text-muted-foreground hover:text-foreground">Profile</Link>
            <Link href="/work" className="text-muted-foreground hover:text-foreground">Work</Link>
            <Link href="/recognition" className="text-muted-foreground hover:text-foreground">Recognition</Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mohammed Faiyazuddin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
