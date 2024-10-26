import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mohammed Faiyazuddin",
  description: "Mohammed Faiyazuddin is listed as top MEP contractors in the middle east",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between px-4 md:px-8">
              <Link href="/" className="text-lg md:text-xl font-medium">
                Mohammed Faiyazuddin
              </Link>
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/profile" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Profile
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/work"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Projects
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Explore our portfolio of innovative MEP solutions.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/work/jalila">Jalila Children&apos;s Hospital</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/work/tadawi">Tadawi Hospital</a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/work/dubaidutyfree">Dubai Duty Free</a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/recognition" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Recognition
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex items-center space-x-2 md:space-x-4">
                <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
                  <a href="https://www.linkedin.com/in/faiyaz-434a719/" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
                  <a href="https://drive.google.com/file/d/1ZW-9UynbkBVLF14XOIk6zyYOVSQL_9eD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FileTextIcon className="h-4 w-4" />
                    <span className="sr-only">Resume/CV</span>
                  </a>
                </Button>
                <ThemeToggle />
                <MobileNav />
              </div>
            </div>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
