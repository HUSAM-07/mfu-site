"use client"

import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, FileTextIcon, ArrowUpIcon } from "@radix-ui/react-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Mohammed Faiyazuddin</h2>
            <p className="text-sm md:text-base text-muted-foreground">MEP Contractor & General Manager</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/faiyaz-434a719/" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://drive.google.com/file/d/1ZW-9UynbkBVLF14XOIk6zyYOVSQL_9eD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileTextIcon className="h-4 w-4" />
                <span className="sr-only">Resume/CV</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center"
              onClick={handleScrollToTop}
            >
              <span className="hidden sm:inline">Back to top</span>
              <ArrowUpIcon className="h-4 w-4 sm:ml-2" />
            </Button>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} Mohammed Faiyazuddin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
