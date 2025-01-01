'use client'

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import SparklesText from "@/components/ui/sparkles-text";
import { 
  BarChart3Icon, 
  HeartPulseIcon, 
  UsersIcon, 
  TicketIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

interface ProjectEntry {
  title: string;
  value: string;
  type: string;
  description?: string;
}

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  achievements?: string[];
}

const ProfilePage = () => {
  const projects: ProjectEntry[] = [
    {
      title: "Meydan One Mall (M1M)",
      value: "1 Billion AED",
      type: "Commercial Development",
      description: "Comprehensive MEP solutions for one of Dubai's largest retail developments"
    },
    {
      title: "Al Jalila Children Specialty Hospital",
      value: "250 Million AED",
      type: "Healthcare",
      description: "State-of-the-art medical facility with advanced MEP infrastructure"
    }
  ];

  const experience: ExperienceEntry[] = [
    {
      role: "General Manager – MEP",
      company: "Fujairah National Construction Co. LLC",
      period: "2017 - Present",
      achievements: [
        "Increased annual revenue from 50M to 250M AED",
        "Led team of 500+ professionals",
        "Delivered 20+ major projects"
      ]
    },
    {
      role: "General Manager",
      company: "Sensaire Services LLC",
      period: "2013 - 2017",
      achievements: [
        "Established new business unit",
        "Secured contracts worth 100M+ AED",
        "Implemented ISO standards"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-background text-foreground">
      {/* Header Section */}
      <div className="space-y-4 mb-8 md:mb-12">
        <SparklesText 
          text="Featured in Construction Week Online's 'Top MEP Contractors' list (2016)"
          className="text-sm md:text-base mb-4"
          colors={{ first: "#4B9CD3", second: "#F59E0B" }}
          sparklesCount={6}
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Mohammed Faiyazuddin</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          MEP Construction Professional with 25+ years of excellence
        </p>
      </div>

      {/* Contact Info Grid */}
      <Card className="mb-8 md:mb-12">
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
          <div>
            <span className="text-sm text-muted-foreground">Email</span>
            <p className="font-medium">mfu.uae@gmail.com</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Location</span>
            <p className="font-medium">Dubai, UAE</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Experience</span>
            <p className="font-medium">25+ Years</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Major Projects Section */}
        <section>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Major Projects</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="p-4 border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium">{project.title}</h3>
                        <Badge variant="secondary">{project.value}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.type}</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p className="text-sm">{project.description}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Experience</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {experience.map((entry, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium">{entry.role}</h3>
                  <p className="text-muted-foreground">{entry.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{entry.period}</p>
                  {entry.achievements && (
                    <ul className="mt-2 space-y-1">
                      {entry.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>

      <Separator className="my-8" />

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">MEP Management</Badge>
              <Badge variant="secondary">Design Coordination</Badge>
              <Badge variant="secondary">Value Engineering</Badge>
              <Badge variant="secondary">Project Management</Badge>
              <Badge variant="secondary">Quality Assurance</Badge>
              <Badge variant="secondary">HVAC Systems</Badge>
              <Badge variant="secondary">Electrical Systems</Badge>
              <Badge variant="secondary">Plumbing Systems</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Business Skills</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Strategic Planning</Badge>
              <Badge>Team Leadership</Badge>
              <Badge>P&L Management</Badge>
              <Badge>Business Development</Badge>
              <Badge>Contract Management</Badge>
              <Badge>Risk Management</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bento Grid Section */}
      <section className="w-full py-16 flex flex-col items-center gap-10">
        <header className="flex flex-col gap-4 items-center max-w-[800px]">
          <h2 className="text-center text-balance text-3xl md:text-4xl font-bold tracking-tight">
            Professional Excellence in MEP Construction
          </h2>
          <p className="text-center text-muted-foreground max-w-prose">
            With over two decades of experience in MEP contracting, I've led numerous successful projects 
            across healthcare, commercial, and retail sectors in the UAE.
          </p>
        </header>

        <div className="grid w-full max-w-[1328px] grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[20rem]">
          {/* Revenue Growth Card */}
          {BarChart3Icon && (
            <div className="relative group md:col-span-6 bg-card rounded-xl overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-50/50 dark:from-blue-900/50 dark:to-blue-900/30" />
              
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/revenue-growth.jpg" // Make sure to add this image to your public folder
                  alt="Revenue Growth Visualization"
                  fill
                  className="object-cover opacity-25 dark:opacity-25"
                  priority
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col p-6">
                <div className="flex-1">
                  <BarChart3Icon className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Revenue Growth</h3>
                  <p className="text-muted-foreground">Successfully increased annual revenue from 50M to 250M AED through strategic leadership and operational excellence.</p>
                </div>
                <Button asChild variant="ghost" className="w-fit">
                  <Link href="/achievements">
                    View Achievements
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Healthcare Projects Card */}
          {HeartPulseIcon && (
            <div className="relative group md:col-span-6 bg-card rounded-xl overflow-hidden p-6 transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-green-50/50 dark:from-green-900/50 dark:to-green-900/30" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <HeartPulseIcon className="h-12 w-12 mb-4 text-green-600" />
                  <h3 className="text-xl font-semibold mb-2">Healthcare Projects</h3>
                  <p className="text-muted-foreground">Led MEP works for Al Jalila Children's Specialty Hospital, setting new standards in healthcare infrastructure.</p>
                </div>
                <Button asChild variant="ghost" className="w-fit">
                  <Link href="/work/jalila">
                    View Project
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Team Leadership Card */}
          {UsersIcon && (
            <div className="relative group md:col-span-6 lg:col-span-3 bg-card rounded-xl overflow-hidden p-6 transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-purple-50/50 dark:from-purple-900/50 dark:to-purple-900/30" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <UsersIcon className="h-12 w-12 mb-4 text-purple-600" />
                  <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
                  <p className="text-muted-foreground">Managing and mentoring a team of 500+ professionals across multiple projects.</p>
                </div>
                <Button asChild variant="ghost" className="w-fit">
                  <Link href="/leadership">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Certifications Card */}
          {TicketIcon && (
            <div className="relative group md:col-span-6 lg:col-span-3 bg-card rounded-xl overflow-hidden p-6 transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-amber-50/50 dark:from-amber-900/50 dark:to-amber-900/30" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <TicketIcon className="h-12 w-12 mb-4 text-amber-600" />
                  <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                  <p className="text-muted-foreground">ISO certified operations with focus on quality and sustainability.</p>
                </div>
                <Button asChild variant="ghost" className="w-fit">
                  <Link href="/certifications">
                    View Certifications
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
