import Image from "next/image";
// import { Separator } from "@/components/ui/separator";
// import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container px-4 pt-12 md:pt-20 lg:pt-32">
        <div className="flex flex-col gap-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Mohammed Faiyazuddin
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80">
            General Manager
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-foreground/60 flex items-center gap-2">
            <span>Dubai, U.A.E</span>
            <span className="text-xs">•</span>
            <span className="text-sm">Scroll Down</span>
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-8 md:mt-12 lg:mt-16 relative w-full aspect-[16/9] max-w-6xl">
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
      <section className="container px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* About Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-[600px] leading-tight mb-4 md:mb-0">
              As a MEP contractor, I focus on delivering top-notch and impactful building solutions.
            </h2>
            <span className="text-sm text-foreground/60">
              (About Me)
            </span>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                With over 25 years of experience in the MEP industry across UAE, I specialize in residential, commercial, retail, schools, and hospitals projects.
              </p>
              <p className="text-lg text-muted-foreground">
                My proven track record includes increasing annual revenues from 50M to 250M through strategic leadership and operational excellence.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Competencies</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>MEP Management</li>
                <li>Design Coordination</li>
                <li>Value Engineering</li>
                <li>Project Management</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover rounded-t-lg"
                      fill
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    id: 'jalila',
    title: "Jalila Children's Specialty Hospital",
    description: "Comprehensive MEP solutions for a leading children's hospital, incorporating cutting-edge medical infrastructure and energy-efficient systems.",
    image: "/projects-assets/jalila-hospital.jpg",
  },
  {
    id: 'tadawi',
    title: "Tadawi Hospital",
    description: "Integrated healthcare services under one roof.",
    image: "/projects-assets/tadawi.png",
  },
  {
    id: 'dubaidutyfree',
    title: "Aviation Club and Dubai Duty Free",
    description: "Innovative MEP solutions for one of the largest shopping centers, balancing energy efficiency with visitor comfort.",
    image: "/projects-assets/dutyfree.jpg",
  },
  // Add more projects as needed
];
