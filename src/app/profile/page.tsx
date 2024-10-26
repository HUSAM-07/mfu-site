'use client'
import React from 'react';
// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

const AboutPage = () => {
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
    <div className="max-w-5xl mx-auto p-8 bg-white min-h-screen">
      {/* Header Section */}
      <div className="space-y-2 mb-12">
        <h1 className="text-5xl font-bold tracking-tight">Mohammed Faiyazuddin</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          MEP Construction Professional
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        <div>
          <span className="text-sm text-gray-500">[Email]</span>
          <p>mfu.uae@gmail.com</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">[Location]</span>
          <p>Al Nahda, Dubai</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">[Experience]</span>
          <p>25+ Years</p>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Main Content */}
      <div className="space-y-16">
        {/* Details Section */}
        <section>
          <h2 className="text-sm text-gray-500 mb-4">[Details]</h2>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed">
              Over 25 years of experience in the MEP industry across UAE, specializing in residential, commercial, retail, schools, and hospitals projects. Proven track record of increasing annual revenues from 50M to 250M through strategic leadership and operational excellence.
            </p>
          </div>
        </section>

        {/* Challenge Section */}
        <section>
          <h2 className="text-sm text-gray-500 mb-4">[Major Projects]</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="max-w-2xl">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <Badge variant="secondary">{project.value}</Badge>
                </div>
                <p className="text-gray-600">{project.type}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-sm text-gray-500 mb-4">[Experience]</h2>
          <div className="space-y-6">
            {experience.map((entry, index) => (
              <div key={index} className="max-w-2xl">
                <h3 className="text-lg font-medium">{entry.role}</h3>
                <p className="text-gray-600">{entry.company}</p>
                <p className="text-sm text-gray-500">{entry.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-sm text-gray-500 mb-4">[Core Competencies]</h2>
          <div className="max-w-2xl space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Technical</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>MEP Management</Badge>
                <Badge>Design Coordination</Badge>
                <Badge>Value Engineering</Badge>
                <Badge>Project Management</Badge>
                <Badge>Quality Assurance</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Business</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Strategic Planning</Badge>
                <Badge variant="outline">Team Leadership</Badge>
                <Badge variant="outline">P&L Management</Badge>
                <Badge variant="outline">Business Development</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-sm text-gray-500 mb-4">[Education]</h2>
          <div className="max-w-2xl">
            <h3 className="text-lg font-medium">Bachelor of Engineering - Mechanical</h3>
            <p className="text-gray-600">Osmania University, Hyderabad</p>
            <p className="text-sm text-gray-500">1989 - 1993</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
