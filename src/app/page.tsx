import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container px-4 pt-20 md:pt-32">
        <div className="flex flex-col gap-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mohammed Faiyazuddin
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
            General Manager
          </h2>
          <p className="text-base md:text-lg text-foreground/60 flex items-center gap-2">
            <span>Dubai, U.A.E</span>
            <span className="text-xs">•</span>
            <span className="text-sm">Scroll Down</span>
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-16 relative w-full aspect-[16/9] max-w-6xl">
          <Image
            src="/dubaihero.jpg"
            alt="Dubai Skyline"
            fill
            priority
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* About Header */}
          <div className="flex justify-between items-start mb-16">
            <h2 className="text-4xl md:text-5xl font-bold max-w-[600px] leading-tight">
              As a MEP contractor, I focus on delivering top-notch and impactful building solutions.
            </h2>
            <span className="text-sm text-foreground/60">
              (About Me)
            </span>
          </div>

          <Separator className="mb-16" />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {/* What I do Label */}
            <div className="flex items-center gap-2 md:col-span-2 mb-4">
              <span className="text-sm text-foreground/60">(What I do)</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                className="text-foreground/60"
              >
                <path 
                  d="M8 3L8 13M8 13L13 8M8 13L3 8" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Service Items */}
            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-semibold mb-4">MEP Design</h3>
                <p className="text-foreground/60 leading-relaxed">
                  I create comprehensive MEP designs that engage and inspire your stakeholders. Let me bring your building systems to life with my expertise.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Interaction Design</h3>
                <p className="text-foreground/60 leading-relaxed">
                  I specialize in designing intuitive building systems that are both functional and energy-efficient.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Direction</h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="text-foreground/60 leading-relaxed">
                  My project direction expertise ensures that your project is on schedule, on budget, and technically sound. Let's discuss how we can bring your vision to life.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">System Integration</h3>
                <p className="text-foreground/60 leading-relaxed">
                  From BMS to HVAC systems, I bring your building's infrastructure to life with seamlessly integrated mechanical and electrical systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-24 overflow-hidden">
        {/* Scrolling Work Text */}
        <div className="mb-16">
          <VelocityScroll 
            text="Work Work Work" 
            default_velocity={1}
            className="text-[clamp(2rem,10vw,10rem)] font-bold leading-none tracking-tight"
          />
        </div>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 gap-8 mb-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter md:text-8xl mb-4">Projects Delivered</h2>
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                Explore our portfolio of innovative MEP solutions for various projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover"
                      fill
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/work/${project.id}`}>
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

const projects = [
  {
    id: 'jalila',
    title: "Jalila Children's Specialty Hospital",
    description: "Comprehensive MEP solutions for a leading children's hospital, incorporating cutting-edge medical infrastructure and energy-efficient systems.",
    image: "/jalila-hospital.jpg",
  },
  {
    id: 'burj-khalifa',
    title: "Burj Khalifa",
    description: "State-of-the-art MEP systems for the world's tallest building, ensuring optimal performance and sustainability.",
    image: "/burj-khalifa.jpg",
  },
  {
    id: 'dubai-mall',
    title: "The Dubai Mall",
    description: "Innovative MEP solutions for one of the largest shopping centers, balancing energy efficiency with visitor comfort.",
    image: "/dubai-mall.jpg",
  },
  // Add more projects as needed
];
