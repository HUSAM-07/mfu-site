'use client'

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectEntry {
  title: string;
  value: string;
  type: string;
}

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
}

const ProfilePage = () => {
  const projects: ProjectEntry[] = [
    {
      title: "Meydan One Mall (M1M)",
      value: "1 Billion AED",
      type: "Commercial Development"
    },
    {
      title: "Al Jalila Children Specialty Hospital",
      value: "250 Million AED",
      type: "Healthcare"
    }
  ];

  const experience: ExperienceEntry[] = [
    {
      role: "General Manager – MEP",
      company: "Fujairah National Construction Co. LLC",
      period: "2017 - Present"
    },
    {
      role: "General Manager",
      company: "Sensaire Services LLC",
      period: "2013 - 2017"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-background text-foreground">
      {/* Header Section */}
      <div className="space-y-2 mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Mohammed Faiyazuddin</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          MEP Construction Professional
        </p>
      </div>

      {/* Info Grid */}
      <Card className="mb-8 md:mb-12">
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
          <div>
            <span className="text-sm text-muted-foreground">Email</span>
            <p className="font-medium">mfu.uae@gmail.com</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Location</span>
            <p className="font-medium">Al Nahda, Dubai</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Experience</span>
            <p className="font-medium">25+ Years</p>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-8 md:my-12" />

      {/* Main Content */}
      <div className="space-y-12 md:space-y-16">
        {/* Details Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Over 25 years of experience in the MEP industry across UAE, specializing in residential, commercial, retail, schools, and hospitals projects. Proven track record of increasing annual revenues from 50M to 250M through strategic leadership and operational excellence.
          </p>
        </section>

        {/* Major Projects Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Major Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <Badge variant="secondary" className="mt-2 md:mt-0">{project.value}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            {experience.map((entry, index) => (
              <Card key={index}>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-medium">{entry.role}</h3>
                  <p className="text-muted-foreground">{entry.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{entry.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Core Competencies</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg font-medium mb-3">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>MEP Management</Badge>
                  <Badge>Design Coordination</Badge>
                  <Badge>Value Engineering</Badge>
                  <Badge>Project Management</Badge>
                  <Badge>Quality Assurance</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg font-medium mb-3">Business</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Strategic Planning</Badge>
                  <Badge variant="outline">Team Leadership</Badge>
                  <Badge variant="outline">P&L Management</Badge>
                  <Badge variant="outline">Business Development</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Education</h2>
          <Card>
            <CardContent className="p-4 md:p-6">
              <h3 className="text-lg font-medium">Bachelor of Engineering - Mechanical</h3>
              <p className="text-muted-foreground">Osmania University, Hyderabad</p>
              <p className="text-sm text-muted-foreground mt-1">1989 - 1993</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
